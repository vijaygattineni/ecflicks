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
  .controller('MovieCtrl', ['videoService', '$state', '$rootScope', function (videoService, $state, $rootScope) {
    var self = this;
    self.currentState = 'Movies';

    self.formatForCarouselList = function (premiumVideosList) {
      var premiumSubLists = [];
      for (var i = 0; i <= premiumVideosList.length / 4; i++) {
        premiumSubLists.push(premiumVideosList.splice(0, 4));
      }
      return premiumSubLists;
    };

    self.showVideo = function (videoId) {
      if($rootScope.userLoggedIn) {
        $state.go("root.videoPlay",{'videoId': videoId});
      }else{
        alert('Please Login');
      }
    };

    var init = function () {
      videoService.getTop4Movies().then(function (response) {
        self.top4VideosList = response.data;
      });
      videoService.getPremiumMovies().then(function (response) {
        self.premiumVideoSubLists = self.formatForCarouselList(response.data);
      });
      videoService.getSubscriptionMovies().then(function (response) {
        self.subscriptionVideosList = self.formatForCarouselList(response.data);
      });
    };

    init();

  }]);
