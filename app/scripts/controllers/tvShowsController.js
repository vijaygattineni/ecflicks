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
    self.currentState = 'TVShows';

    self.formatForCarouselList = function (premiumVideosList) {
      var premiumSubLists = [];
      for (var i = 0; i <= premiumVideosList.relatedResults.length / 4; i++) {
        premiumSubLists.push(premiumVideosList.relatedResults.splice(0, 4));
      }
      return premiumSubLists;
    };

    var init = function () {
      videoService.getTop4TvShows().then(function (response) {
        self.top4VideosList = response.data;
      });
      videoService.getPremiumTVShows().then(function (response) {
        self.premiumVideoSubLists = self.formatForCarouselList(response.data);
      });
      videoService.getSubscriptionTVShows().then(function (response) {
        self.subscriptionVideosList = self.formatForCarouselList(response.data);
      });
    };

    init();

  });
