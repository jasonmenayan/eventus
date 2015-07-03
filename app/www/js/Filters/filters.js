"use strict";

angular.module("starter.filters", [])

.controller("FiltersCtrl", function($scope, $rootScope, StackFilters, FetchEvents) {

  $scope.categories = [{103:'Music'},{101:'Business'},{110:'Food & Drink'},{113:'Community'},{105:'Arts'},{104:'Film & Media'},{108:'Sports & Fitness'},{107:'Health'},{102:'Science & Tech'},{109:'Travel & Outdoor'},{111:'Charity & Causes'},{114:'Spirituality'},{115:'Family & Education'},{116:'Holiday'},{112:'Government'},{106:'Fashion'},{117:'Home & Lifestyle'},{118:'Auto, Boat & Air'},{119:'Hobbies'},{199:'Other'}];
  $scope.filteredCategories = [];
  StackFilters.categoriesSelected = $scope.filteredCategories;

  $scope.addRemoveCategory = function(id, catname) {
    var index = -1;
    for (var i=0; i < $scope.filteredCategories; i++) {
      if (Object.keys($scope.filteredCategories[i]) === id) {
        index = i;
      }
    }
    if (index > -1) {
      $scope.filteredCategories.splice(index, 1);
    } else {
      var tuple = {};
      tuple[id] = catname;
      $scope.filteredCategories.push(tuple);
    }
    $scope.changeFilter();
    StackFilters.categoriesSelected = $scope.filteredCategories;
  };

  $scope.isActive = function(id) {
    var index = -1;
    for (var i=0; i < $scope.filteredCategories; i++) {
      if (Object.keys($scope.filteredCategories[i]) === id) {
        index = i;
      }
    }
    return index > -1;
  };

  $scope.params = {};

  $scope.setParamsAndFetch = function(){
    $scope.params.zip = $scope.zip;
    $scope.params.miwithin = $scope.miwithin;
    var catsTemp = [];
    for (var i=0; i < $scope.filteredCategories; i++) {
      catsTemp = catsTemp.concat(Object.keys($scope.filteredCategories[i]));
    }
    $scope.params.categories = catsTemp.join(',');
    FetchEvents.getEvents(params, 1);
  };

});
