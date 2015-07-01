"use strict";
angular.module("starter.auth", [])

.controller("AuthCtrl", function ($scope, Auth, $rootScope, $location, $window){
  $scope.user = {};

  // sign in. if legit, add token to localStorage and sets current user in $rootScope
  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (data) {
        $window.localStorage.setItem("com.starter", data.token);
        $rootScope.currentUser = {
          username: data.userInfo.username,
          id: data.userInfo._id
        };
        $location.path("/app/main");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // sign up, add token to localStorage and sets current user in $rootScope
  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (data) {
        $window.localStorage.setItem("com.starter", data.token);
        $rootScope.currentUser = {
          username: data.userInfo.username,
          id: data.userInfo._id
        };
        $location.path("/app/main");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // signout by removing token from localStorage and removing current user in $rootScope
  $scope.signout = function () {
    $window.localStorage.removeItem("com.starter");
    delete $rootScope.currentUser;
    $location.path("/signin");
  };

  $scope.isAuth = function(){
    return !!$window.localStorage.getItem("com.starter");
  };

  // $scope.refreshUser = function (cb){

  // }
});
