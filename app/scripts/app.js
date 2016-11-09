'use strict';

/**
 * @ngdoc overview
 * @name emoviesApp
 * @description
 * # emoviesApp
 *
 * Main module of the application.
 */
angular
  .module('emoviesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]).run(function($rootScope, authService){
    var token = localStorage.getItem('accessToken');
    if (token != null) {
      //Check if the token is not expired
      authService.tokenStatus({'token':token}).then(function (res){
      }, function(err){
        $rootScope.userLoggedIn = false;
        localStorage.setItem('accessToken', null);
      });
      $rootScope.userLoggedIn = true;
    }else{
      $rootScope.userLoggedIn = false;
    }
  });
