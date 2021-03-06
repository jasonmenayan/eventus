"use strict";
angular.module("starter.auth", [])

.controller("AuthCtrl", function (FetchEvents, $timeout, $scope, $rootScope, $location, $window, Auth){
  $scope.user = {};

  $scope.signin = function () {
    console.log("sign in clicked");
    console.log('$scope.user.zip: ', $scope.user.zip)
    Auth.signin()
      .then(function (authResult) {

        $rootScope.currentUser = authResult;

        FetchEvents.zip = $scope.user.zip;

        $timeout(function () {
          $location.path("/app/main");
          }, 0);

        $scope.user = {};

      })
      // .catch(function (error) {
      //   console.log(error);
      // });
  };

  // sign in. if legit, add token to localStorage and sets current user in $rootScope
  // $scope.signin = function () {
  //   Auth.signin($scope.user)
  //     .then(function (data) {
  //       $window.localStorage.setItem("com.starter", data.token);
  //       $rootScope.currentUser = {
  //         username: data.userInfo.username,
  //         id: data.userInfo._id
  //       };
  //       $location.path("/app/main");
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // sign up, add token to localStorage and sets current user in $rootScope
  // $scope.signup = function () {
  //   Auth.signup($scope.user)
  //     .then(function (data) {
  //       $window.localStorage.setItem("com.starter", data.token);
  //       $rootScope.currentUser = {
  //         username: data.userInfo.username,
  //         id: data.userInfo._id
  //       };
  //       $location.path("/app/main");
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // signout by removing token from localStorage and removing current user in $rootScope
  $scope.signout = function () {
    delete $rootScope.currentUser;
    Auth.signout();
    $location.path("/signin");
  };

  $scope.isAuth = function(){
    return !!$window.localStorage.getItem("com.starter");
  };

  // $scope.refreshUser = function (cb){

  // }
});
