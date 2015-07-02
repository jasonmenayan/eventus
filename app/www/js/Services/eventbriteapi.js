"use strict";
angular.module('starter')

  .factory("fetchEvents", ['$http', function($http){
    // post potential user to server which will determine if legit

    var llurlbase = 'http://maps.googleapis.com/maps/api/geocode/json?address=';
    var eburlbase = 'https://www.eventbriteapi.com/v3/events/search/?';
    var ebtken = 'MKFL4P7OGOVRM3P7IV6L';

    fetchEvents.getLatLongFromZip = function(zip) {
      var url = llurlbase + zip;
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
          var url = eburlbase + 'location.within=' + mi + 'mi&location.latitude=' + lat + '&location.longitude=' + lng + '&start_date.keyword=this_month&popular=on&categories=' + cats + '&token=' + ebtken + '&expand=venue';

          var retrieveEvents = function(url) {
            $http.get(url)
            .then(function (results) {
              eventArr.concat(results.events);
              if (results.pagination.page_number !== results.pagination.page_count) {
                var newUrl = url + '&page=' + (+results.pagination.page_number + 1);
                retrieveEvents(newUrl);
              } else {
                return eventArr;
              }
            })
          };
      });  
      retrieveEvents(url);
    };
    
    return fetchEvents;

  }]);



