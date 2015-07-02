"use strict";

angular.module("starter.stack", [])

.controller("StackCtrl", function($scope, BookChoices, $rootScope, Auth, Gcal) {
  var ebObject = {
            "resource_uri": "https://www.eventbriteapi.com/v3/events/17076415017/",
            "name": {
                "text": "The Intern Picnic 2015",
                "html": "The Intern Picnic 2015"
            },
            "description": {
                "text": "Over the last two summers, The Intern Project has connected thousands of interns. We hosted the second annual Intern Project Summer Kickoff Picnic, and organized dinners that introduced small groups of interns to influential leaders in tech from around the Bay Area.\u00a0 \nThe Intern Project is\u00a0back again!\u00a0Join us for our annual Intern Picnic at Potrero Del Sol in San Francisco from 1PM - 6PM. All interns are invited :)\u00a0 \n\u00a0 \n\u00a0 ",
                "html": "<P><SPAN STYLE=\"font-size: medium;\"><SPAN STYLE=\"line-height: 1.6em;\">Over the last two summers, The Intern Project has connected thousands of interns. We hosted the second annual Intern Project Summer Kickoff Picnic, and organized dinners that introduced small groups of interns to influential leaders in tech from around the Bay Area.<\/SPAN><SPAN STYLE=\"line-height: 1.6em;\">\u00a0<\/SPAN><\/SPAN><\/P>\r\n<P><SPAN STYLE=\"font-size: medium; line-height: 1.6em;\">The Intern Project is\u00a0<EM>back again!\u00a0<\/EM>Join us for our annual Intern Picnic at Potrero Del Sol in San Francisco from 1PM - 6PM. All interns are invited :)\u00a0<\/SPAN><\/P>\r\n<P>\u00a0<\/P>\r\n<P><SPAN STYLE=\"line-height: 1.6em;\">\u00a0<\/SPAN><\/P>"
            },
            "id": "17076415017",
            "url": "http://www.eventbrite.com/e/the-intern-picnic-2015-tickets-17076415017?aff=ebapi",
            "start": {
                "timezone": "America/Los_Angeles",
                "local": "2015-07-26T13:00:00",
                "utc": "2015-07-26T20:00:00Z"
            },
            "end": {
                "timezone": "America/Los_Angeles",
                "local": "2015-07-26T18:00:00",
                "utc": "2015-07-27T01:00:00Z"
            },
            "created": "2015-05-21T04:05:21Z",
            "changed": "2015-06-23T15:11:56Z",
            "capacity": 3851,
            "status": "live",
            "currency": "USD",
            "online_event": false,
            "tx_time_limit": 600,
            "logo_id": null,
            "organizer_id": "3884346415",
            "venue_id": "10797102",
            "category_id": "199",
            "subcategory_id": null,
            "format_id": "11",
            "category": {
                "resource_uri": "https://www.eventbriteapi.com/v3/categories/199/",
                "id": "199",
                "name": "Other",
                "name_localized": "Other",
                "short_name": "Other",
                "short_name_localized": "Other"
            },
            "logo": null,
            "venue": {
                "address": {
                    "address_1": "Potrero & Army st",
                    "address_2": null,
                    "city": "San Francisco",
                    "region": "CA",
                    "postal_code": "94110",
                    "country": "US",
                    "latitude": 37.7488327,
                    "longitude": -122.4062141
                },
                "resource_uri": "https://www.eventbriteapi.com/v3/venues/10797102/",
                "id": "10797102",
                "name": "Potrero Del Sol",
                "latitude": "37.7488327",
                "longitude": "-122.4062141"
            }
        }

  Auth.checkAuth()
  .then(function(){
    var gcalObject = Gcal.EtoG(ebObject)
    Gcal.sendToGcal(gcalObject);
  })



  $scope.userId = $rootScope.currentUser.id;
  $scope.stack = [];
  // get list of saved books aka 'stack' using getStack method from BookChoices factory
  $scope.getStack = function( id ) {
    BookChoices.getStack(id)
      .then(function(data){
        $scope.stack = data.stack;
      });
  };

  // remove book at index from stack
  $scope.removeFromStack = function( index ){
    BookChoices.removeFromStack($scope.userId, $scope.stack[index])
      .then(function(){
        $scope.getStack($scope.userId);
      });
  };

  $scope.getStack($scope.userId);
});
