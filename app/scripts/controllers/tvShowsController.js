/**
 * Created by vgattineni on 9/21/16.
 */
'use strict';

/**
 * @ngdoc function
 * @name emoviesApp.controller:TVShowsCtrl
 * @description
 * # TVShowsCtrl
 * Controller of the emoviesApp
 */
angular.module('emoviesApp')
  .controller('TVShowsCtrl', function (videoService) {
    var self = this;

    var init = function () {
      videoService.getTop4TvShows().then(function (response) {
        self.top4VideosList = response.data;
        console.log("Top4 Movies -->>", self.top4VideosList);
      });
      videoService.getPremiumTVShows().then(function (response) {
        self.premiumVideosList = response.data;
        console.log("Premium TVShows -->>", self.premiumVideosList);
      });
      videoService.getSubscriptionTVShows().then(function (response) {
        self.subscriptionVideosList = response.data;
        console.log("Subs TVShows -->>", self.subscriptionVideosList);
      });
    };

    init();

  });
