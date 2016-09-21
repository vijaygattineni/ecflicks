/**
 * Created by vgattineni on 9/13/16.
 */
'use strict';
angular.module('emoviesApp').config(function ($stateProvider, $urlRouterProvider) {

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
        controller: 'MovieCtrl as movie',
      }
    }
  }).state('root.TVShows', {
    url: '/TVShows',
    views: {
      'body': {
        templateUrl: '/views/home.html',
        controller: 'TVShowsCtrl as TVShows',
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
  });
});
