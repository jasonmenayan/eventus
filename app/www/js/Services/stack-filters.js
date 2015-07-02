"use strict";
angular.module('starter')

  .factory('EventCards', function() {
    return {eventArray = [];}
  })

  .factory('StackFilters', function (FetchEvents, EventCards) {

    // get new batch (page) of events
    var getEvents = function (params, page) {
      return FetchEvents.getEvents(params)
        .then(function (results) {
          return results.data.events;
        });
    };

    // event categories (mapped to Eventbrite API parameter 'categories')
    var categories = [{103:'Music'},{101:'Business'},{110:'Food & Drink'},{113:'Community'},{105:'Arts'},{104:'Film & Media'},{108:'Sports & Fitness'},{107:'Health'},{102:'Science & Tech'},{109:'Travel & Outdoor'},{111:'Charity & Causes'},{114:'Spirituality'},{115:'Family & Education'},{116:'Holiday'},{112:'Government'},{106:'Fashion'},{117:'Home & Lifestyle'},{118:'Auto,Boat & Air'},{119:'Hobbies'},{199:'Other'}];

    return {
      getEvents: getEvents,
      categories: categories
    };
  });
