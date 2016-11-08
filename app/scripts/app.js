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
    'ui.router',
    'LocalStorageModule'
  ]).run(function(localStorageService, $rootScope, authService){
    var token = localStorageService.get('accessToken');
    if (token != null) {
      //Check if the token is not expired
      authService.tokenStatus({'token':token}).then(function (res){
        console.log(res.message);
      }, function(err){
        $rootScope.userLoggedIn = false;
        localStorageService.set('accessToken', null);
      });
      $rootScope.userLoggedIn = true;
    }else{
      $rootScope.userLoggedIn = false;
    }
  });
