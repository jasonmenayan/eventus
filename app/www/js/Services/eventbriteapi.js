"use strict";
angular.module('starter')

  .factory("fetchEvents", ['$http', function($http){
    // post potential user to server which will determine if legit

    var llurlbase = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
    // var tzurlbase = 'https://maps.googleapis.com/maps/api/timezone/json?location=';
    var eburlbase = 'https://www.eventbriteapi.com/v3/events/search/?';
    var ebtken = 'MKFL4P7OGOVRM3P7IV6L';
    var fetchedEvents = {};

    fetchEvents.getLatLongFromZip = function(zip) {
      var url = gmurlbase + zip;
      var lat = '';
      var lng = '';
      return $http.get(url)
      .success(function (results, status) {
        if (status === 'OK') {
          lat = results[0].geometry.location.lat;
          lng = results[0].geometry.location.lng;
        }
        return {lat: lat, lng: lng};
      }).
      .error(function (results, status) {
        console.log('Lat/lng not fetched. Error: ', status);
      });
    };

    // fetchEvents.getTimeZoneFromLatLng = function(latlng) {
    //   var lat = latlng.lat;
    //   var lng = latlng.lng;
    //   var unixts = (new Date).getTime();
    //   var url = tzurlbase + lat + ',' + lng + '&timestamp=' + unixts;
    //   var offsetHrs = 0;
    //   return $http.get(url)
    //   .success(function (results, status) {
    //     if (status === 'OK') {
    //       offsetHrs = (results.dstOffset + results.rawOffset) / 3600;
    //     }
    //     return offsetHrs;
    //   }).
    //   .error(function(results, status) {
    //     console.log('Time zone offset not fetched. Error: ', status);
    //   });
    // };

  // should accept an object with following format:
    // parameters = {
    //   zip: 55555,
    //   miwithin: 5, // # of miles within ZIP code
    //   categories: '101,103,105', // comma-delimited IDs
    // }

    fetchEvents.getEvents = function (parameters) {
      var mi = parameters.miwithin;
      var cats = parameters.categories;
      var lat = '';
      var lng = '';
      var eventArr = [];

      getLatLongFromZip(parameters.zip)
        .then(function (latlong) {
          lat = latlong.lat;
          lng = latlong.lng;
          var url = llurlbase + 'location.within=' + mi + 'mi&location.latitude=' + lat + '&location.longitude=' + lng + '&start_date.keyword="this_month"&categories=' + cats + '&token=' + ebtken;
          $http.get(url)
          .then(function (results) {
            eventArr.push(results.events);
            if (results.pagination.page_number !== results.pagination.page_count) {
              // recursively call: append '&page=' + results.pagination.page_number+1
            }
          })
        })
      



      .success(function (results, status) {
        fetchedEvents = results;
      });
    };


    


    return fetchEvents;

  }]);



