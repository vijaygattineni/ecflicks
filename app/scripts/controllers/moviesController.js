/**
 * Created by vgattineni on 9/14/16.
 */
'use strict';

/**
 * @ngdoc function
 * @name emoviesApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the emoviesApp
 */
angular.module('emoviesApp')
  .controller('MovieCtrl', function (videoService) {
    var self = this;

    var init = function () {
      videoService.getTop4Movies().then(function (response) {
        self.top4VideosList = response.data;
        console.log("Top4 Movies -->>", self.top4VideosList);
      });

      videoService.getPremiumMovies().then(function (response) {
        self.premiumVideosList = response.data;
        console.log("Premium movies -->>", self.premiumVideosList);
      });

      videoService.getSubscriptionMovies().then(function (response) {
        self.subscriptionVideosList = response.data;
        console.log("Subs movies -->>", self.subscriptionVideosList);
      });
    };

    init();

  });
