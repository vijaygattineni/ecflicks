/**
 * Created by vgattineni on 9/13/16.
 */
'use strict';
angular.module('emoviesApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

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
    url: '/video',
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
  });
}]);
