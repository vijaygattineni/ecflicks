/**
 * Created by vgattineni on 9/20/16.
 */
'use strict';
angular.module('emoviesApp')
  .service('videoService', [ '$http', '$q', function ($http, $q) {
    var baseUrl = 'http://www.ecineflix.com/api/movies';
    //var baseUrl = 'http://localhost:8080/api/movies';
      this.getTop4Movies = function () {
        var top4URL = 'fixtures/top4.json';
        return $http.get(top4URL)
          .then(function (respone) {
            return respone;
          },
          function (err) {
            return $q.reject(err);
          });
      };
      this.getPremiumMovies = function () {
        var premiumMoviesUrl = baseUrl+'/premium';
        //var premiumMoviesFixtureUrl = 'fixtures/premiumMovies.json';
        return $http.get(premiumMoviesUrl).then(function (response) {
            return response;
          },
          function (err) {
            return $q.reject(err);
          });
      };
      this.getSubscriptionMovies = function () {
        var subscriptionMoviesUrl = baseUrl+'/subscription';
        //var subscriptionMoviesFixtureUrl = 'fixtures/subscriptionMovies.json';
        return $http.get(subscriptionMoviesUrl).then(function (response) {
          return response;
        }, function (err) {
          return $q.reject(err);
        });
      };
      this.getTop4TvShows = function () {
        var top4URL = 'fixtures/top4TvShows.json';
        return $http.get(top4URL)
          .then(function (respone) {
            return respone;
          },
          function (err) {
            return $q.reject(err);
          });
      };
      this.getPremiumTVShows = function () {
        var premiumTVShowsUrl = 'fixtures/premiumTVShows.json';
        return $http.get(premiumTVShowsUrl)
          .then(function (respone) {
            return respone;
          },
          function (err) {
            return $q.reject(err);
          });
      };
      this.getSubscriptionTVShows = function () {
        var premiumTVShowsUrl = 'fixtures/subscripitionTVShows.json';
        return $http.get(premiumTVShowsUrl)
          .then(function (respone) {
            return respone;
          },
          function (err) {
            return $q.reject(err);
          });
      };
      this.getSuggestions = function () {
        var suggestionUrl = 'fixtures/searchResults.json';
        return $http.get(suggestionUrl)
          .then(function (response) {
          return response;
        }, function (err) {
          return $q.reject(err);
        });
      };
      this.getVideo = function (videoId) {
        var videoUrl = baseUrl+'/video/'+videoId;
        //var subscriptionMoviesFixtureUrl = 'fixtures/subscriptionMovies.json';
        return $http.get(videoUrl).then(function (response) {
          return response;
        }, function (err) {
          return $q.reject(err);
        });
      };
      this.getVideoDetails = function (videoId) {
        var videoUrl = baseUrl+'/videodetails/'+videoId;
        //var subscriptionMoviesFixtureUrl = 'fixtures/subscriptionMovies.json';
        return $http.get(videoUrl).then(function (response) {
          return response;
        }, function (err) {
          return $q.reject(err);
        });
      };
      this.payForPremium = function(videoId, videoName) {
        var payPremiumUrl = baseUrl+'/payForPremium/'+ videoId +'/'+ videoName;
        return $http.get(payPremiumUrl).then(function (response) {
          return response;
        }, function (err) {
          return $q.reject(err);
        });
      };
      this.subscribe = function(){
        var paySubscription = baseUrl+'/subscription/pay';
        return $http.get(paySubscription).then(function (response) {
          return response;
        }, function (err) {
          return $q.reject(err);
        });
      }
  }]);
