"use strict";
angular.module("starter.services", [])

  .factory("Auth", function($http, SERVER){
    // use oauth.io to get user's access token for google calendar;
    var signin = function() {
      var config = {
        'client_id': '989969156266-814fcdt9cht50r842r0serpo6b6ol6nm',
        'scope': 'https://www.googleapis.com/auth/calendar',
        'immediate': false
      };
      return gapi.auth.authorize(config);    
    };

    var checkAuth = function() {
      var config = {
        'client_id': '989969156266-814fcdt9cht50r842r0serpo6b6ol6nm',
        'scope': 'https://www.googleapis.com/auth/calendar',
        'immediate': true
      };
      return gapi.auth.authorize(config);   
    };
    // post potential user to server which will determine if legit
    // var signin = function (user) {
    //     return $http({
    //       method: "POST",
    //       url: SERVER.url + "/user/signin",
    //       data: user
    //     })
    //     .then(function (resp) {
    //       return resp.data;
    //     });
    //   };

    // post new user to server which will set up new account
    // var signup = function (user) {
    //   return $http({
    //     method: "POST",
    //     url: SERVER.url + "/user/signup",
    //     data: user
    //   })
    //   .then(function (resp) {
    //     return resp.data;
    //   });
    // };


    // var refreshUser = function (){
    //   return $http({
    //     method: "GET",
    //     url: SERVER.url + "user/refresh"
    //   })
    // }

    return {
      signin: signin,
      checkAuth: checkAuth
      // refreshUser: refreshUser
    };
  })
  
  .factory('Gcal', function(Auth) {
    var event = {
      calendarId: 'primary',
      description: 'group meditation',
      start: {dateTime: '2015-07-04T10:00:00Z'},
      end: {dateTime: '2015-07-04T11:00:00Z'},
      organizer: {displayName: 'Hack Reactor Tea Party'}
    };
    var sendToGcal = function(event) {
      gapi.client.load('calendar', 'v3')
      .then(function() {
        gapi.client.calendar.events.insert(event)
        .execute(function(response) {
          console.log(response);
        })
      })
      
    };
    return {
      sendToGcal: sendToGcal,
      event: event
    };

  })

  .factory("Account", function(){
    var getUsername = function(){
      return $http({
        method: "GET",
        url: "/users"
      })
      .then(function(resp){
        return resp.data;
      });
    };

    var changeUsername = function(user){
      return $http({
        method: "PUT",
        url: "/users",
        data: user
      }).then(function(resp){
        return resp.data;
      });
    };

    // var changePassword = function(user){
    // };

    // var changeEmail = function(user){
    // };

    return {
      getUsername: getUsername,
      changeUsername: changeUsername,
      changePassword: changePassword,
      changeEmail: changeEmail
    };
  })

  .factory("BookChoices", function($http, SERVER){
    // get books that have not been seen already
    var getBooks = function(userId, count) {
      return $http({
        method: "GET",
        url: SERVER.url + "/book/getBooks?count=" + count + "&user=" + userId
      })
      .then(function (resp){
        return resp.data;
      });
    };

    // post book to a user's stack
    var addToStack = function (id, book) {
      return $http({
        method: "POST",
        url: SERVER.url + "/user/" + id + "/addbook",
        data: book
      });
    };

    // return a user's stack of saved books
    var getStack = function (id) {
      return $http({
        method: "GET",
        url: SERVER.url + "/user/" + id + "/stack"
      })
      .then(function (resp){
        return resp.data;
      });
    };

    // delete a book from a user's stack of saved books
    var removeFromStack = function (id, book) {
      return $http({
        method: "POST",
        url: SERVER.url + "/user/" + id + "/removebook",
        data: book
      });
    };

    return {
      getBooks: getBooks,
      addToStack: addToStack,
      getStack: getStack,
      removeFromStack: removeFromStack
    };
  })

  .factory("userInfo", function($http, SERVER){
    var getUser = function (id) {
      return $http({
        method: "GET",
        url: SERVER.url + "/user/" + id + "/userInfo"
      })
      .then(function(resp){
        return resp.data;
      });
    };

    return {
      getUser: getUser
    };
  })

  // updates the user's filters
  .factory("filterChoices", function($http, SERVER){
    var changeFilter = function(id, genres){
      return $http({
        method: "POST",
        url: SERVER.url + "/user/" + id + "/filterpreferences",
        data: genres
      });
    };

    var genresSelected = [{title: "Poetry"}, {title: "Classic"}, {title: "Modernism"}, {title: "Fiction"}, {title: "Fantasy"}, {title: "Sci-fi"}, {title: "Education"}, {title: "Drama"}, {title: "Mystery"}, {title: "Horror"}, {title: "Historical Fiction"}, {title: "Non-fiction"}];

    return {
      changeFilter: changeFilter,
      genresSelected: genresSelected
    };
  });
