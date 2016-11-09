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
    if (token != null && token != '') {
      //Check if the token is not expired
      authService.tokenStatus({'token':token}).then(function (res){
        $rootScope.userLoggedIn = true;
      }, function(err){
        $rootScope.userLoggedIn = false;
        localStorage.removeItem('accessToken');
      });
    }else{
      localStorage.removeItem('accessToken');
      $rootScope.userLoggedIn = false;
    }
  });
