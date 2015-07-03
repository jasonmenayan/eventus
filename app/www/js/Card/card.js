"use strict";

angular.module("starter.cards", [])

.controller("CardsCtrl", function($scope, $ionicSideMenuDelegate, $rootScope, StackFilters, FetchEvents, EventChoices){

  //prevent side menu from dragging out with cards
  $ionicSideMenuDelegate.canDragContent(false);
  //repulls books every time the filters change
  $scope.$watch(function(){
    return StackFilters.categoriesSelected.length;
  }, function(){
    console.log("change in filter was noticed");
    $scope.getEvents($scope.userId, 10);
  });

  // retrieves books from the database
  $scope.getEvents = function(userId, count){
    var params = {zip: 94114, miwithin: 10, categories: '101,103,105'};
    FetchEvents.getEvents(params, 1)
      .then(function(results){
        console.log(FetchEvents.events);
        $scope.cards = FetchEvents.events;
        $scope.currentCard = $scope.cards[$scope.cards.length - 1];
      });

    // BookChoices.getBooks(userId, count)
    //   .then(function(books){
    //     $scope.cards = books;
    //     $scope.currentCard = $scope.cards[$scope.cards.length - 1];
    //   });
  };

  $scope.userId = '000000'//$rootScope.currentUser.id;  //delete this line

  // Handles book swiping
  $scope.cardSwipedLeft = function(index) {
    $scope.clicked = false;
    $scope.cardDestroyed(index);
    console.log("Left swipe", index);
 };

 // Adds card to stack when user swipes right
  $scope.cardSwipedRight = function(index) {
    $scope.clicked = false;
    console.log("Right swipe", index);
    EventChoices.addToStack($scope.cards[index]);
    $scope.cardDestroyed(index);
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    $scope.currentCard = $scope.cards[index - 1];
    console.log("Card removed");
    if(index === 0){
      $scope.getBooks($scope.userId, 10);
    }
  };

  $scope.cardPartialSwipe = function(amt){
    console.log(amt);
  };

  $scope.showText = function() {
    $scope.clicked = $scope.clicked ? false : true;
 };

 $scope.clicked = false;


// functions for liking or disliking book via buttons
// must use currentCard because buttons are out of card scope
  $scope.like = function( card ){
    var index = $scope.cards.indexOf(card);
    $scope.cardSwipedRight(index);
    $scope.cardDestroyed(index);
  };

  $scope.dislike = function( card ){
    var index = $scope.cards.indexOf(card);
    $scope.cardSwipedLeft(index);
    $scope.cardDestroyed(index);
  };

  $scope.truncateDescription = function (description){
   if(description.length > 800) {
     var stop = description.indexOf(' ', 800);
     if(stop>50) {
       var cutoff = 850;
     } else {
       var cutoff = 800+stop
     }
     var truncated = description.slice(0,cutoff);
     return truncated+'...'
   } else {
     return description;
   }
  }


});
