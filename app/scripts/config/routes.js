/**
 * Created by vgattineni on 9/13/16.
 */
'use strict';
angular.module('emoviesApp').config(function ($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('root', {
    views: {
      'container': {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }
    }
  }).state('root.home', {
    url: '/home',
    views:{
      'body':{
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      }
    }
  }).state('root.about', {
    url: '/about',
    views:{
      'body':{
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      }
    }
  }).state('root.videoPlay', {
    url: '/video',
    views:{
      'body':{
        templateUrl: '/views/videoPlayer.html',
        controller: 'VideoCtrl as videoController'
      }
    }
  })
});
