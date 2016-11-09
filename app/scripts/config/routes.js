/**
 * Created by vgattineni on 9/13/16.
 */
'use strict';
angular.module('emoviesApp').config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {

  $urlRouterProvider.otherwise('/movies');

  $stateProvider.state('root', {
    views: {
      'container': {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as main'
      }
    }
  }).state('root.movies', {
    url: '/movies',
    views: {
      'body': {
        templateUrl: '/views/home.html',
        controller: 'MovieCtrl as videos',
      }
    }
  }).state('root.TVShows', {
    url: '/TVShows',
    views: {
      'body': {
        templateUrl: '/views/home.html',
        controller: 'TVShowsCtrl as videos',
      }
    }
  }).state('root.videoPlay', {
    url: '/video/:videoId',
    views: {
      'body': {
        templateUrl: '/views/videoPlayer.html',
        controller: 'VideoCtrl as videoController'
      }
    }
  }).state('root.summary', {
    url: '/summary/:type',
    views: {
      'body': {
        templateUrl: '/views/summary.html',
        controller: 'SummaryCtrl as summary'
      }
    }
  }).state('root.profile',{
    url:'/profile',
    views: {
      'body': {
        templateUrl: '/views/profile.html',
        controller: 'ProfileCtrl as profile'
      }
    }
  }).state('root.payment',{
    url:'/payment/:videoId',
    views: {
      'body': {
        templateUrl: '/views/payment.html',
        controller: 'PaymentCtrl as payment'
      }
    }
  }).state('root.profileActivation',{
    url:'/profileActivation/:activationCode',
    views: {
      'body': {
        templateUrl: '/views/profileActivation.html',
        controller: 'profileActivationCtrl as profileActivation'
      }
    }
  });

  $httpProvider.interceptors.push(function() {
    return {
      'request': function(config) {
        if (localStorage.getItem('accessToken') != null && localStorage.getItem('accessToken') != '') {
          config.headers['Authorization'] = localStorage.getItem('accessToken');
        }
        else {
          delete config.headers.Authorization;
        }
        return config;
      }
    };
  });

}]);
