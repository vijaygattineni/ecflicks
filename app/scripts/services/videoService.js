/**
 * Created by vgattineni on 9/20/16.
 */
'use strict';
angular.module('emoviesApp')
  .service('videoService', [ '$http', '$q', function ($http, $q) {
    var baseUrl = 'http://localhost:8000/api/movies';
    return {
      getTop4Movies: function () {
        var top4URL = 'fixtures/top4.json';
        return $http.get(top4URL)
          .then(function (respone) {
            return respone;
          },
          function (err) {
            return $q.reject(err);
          });
      },
      getPremiumMovies: function () {
        //var premiumMoviesUrl = baseUrl+'/premium';
        var premiumMoviesFixtureUrl = 'fixtures/premiumMovies.json';
        return $http.get(premiumMoviesFixtureUrl).then(function (response) {
            return response;
          },
          function (err) {
            return $q.reject(err);
          });
      },
      getSubscriptionMovies: function () {
        //var subscriptionMoviesUrl = baseUrl+'/subscription';
        var subscriptionMoviesFixtureUrl = 'fixtures/subscriptionMovies.json';
        return $http.get(subscriptionMoviesFixtureUrl).then(function (response) {
          return response;
        }, function (err) {
          return $q.reject(err);
        });
      },
      getTop4TvShows: function () {
        var top4URL = 'fixtures/top4TvShows.json';
        return $http.get(top4URL)
          .then(function (respone) {
            return respone;
          },
          function (err) {
            return $q.reject(err);
          });
      },
      getPremiumTVShows: function () {
        var premiumTVShowsUrl = 'fixtures/premiumTVShows.json';
        return $http.get(premiumTVShowsUrl)
          .then(function (respone) {
            return respone;
          },
          function (err) {
            return $q.reject(err);
          });
      },
      getSubscriptionTVShows: function () {
        var premiumTVShowsUrl = 'fixtures/subscripitionTVShows.json';
        return $http.get(premiumTVShowsUrl)
          .then(function (respone) {
            return respone;
          },
          function (err) {
            return $q.reject(err);
          });
      },
      getSuggestions: function () {
        var suggestionUrl = 'fixtures/searchResults.json';
        return $http.get(suggestionUrl)
          .then(function (response) {
          return response;
        }, function (err) {
          return $q.reject(err);
        });
      }
    };
  }]);
