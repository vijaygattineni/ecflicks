/**
 * Created by vgattineni on 9/24/16.
 */
'use strict';

/**
 * @ngdoc function
 * @name emoviesApp.controller:Summary
 * @description
 * # SummaryCtrl
 * Controller of the emoviesApp
 */
angular.module('emoviesApp').controller('SummaryCtrl', ['videoService', '$stateParams', function (videoService, $stateParams) {
  var self = this;

  self.sortOption = '';
  self.languageOption = '';
  self.orginalResponse = [];

  self.sortOptions = [{
    key: '',
    value: 'Popular'
  }, {
    key: 'duration',
    value: 'Duration'
  }, {
    key: 'year',
    value: 'Recent'
  }];
  self.languageOptions = [{
    key: '',
    value: 'All'
  }, {
    key: 'telugu',
    value: 'Telugu'
  }, {
    key: 'english',
    value: 'English'
  }, {
    key: 'hindi',
    value: 'Hindi'
  }];

  var init = function () {
    switch ($stateParams.type) {
      case 'PremiumMovies':
        self.title = 'Premium Movies';
        videoService.getPremiumMovies().then(function (response) {
          self.resultList = response.data;
          console.log(self.resultList);
        });
        break;
      case 'SubscriptionMovies':
        videoService.getSubscriptionMovies().then(function (response) {
          self.title = 'Subscription Movies';
          self.resultList = response.data;
        });
        break;
    }
    angular.copy(self.resultList,self.orginalResponse);
  };

  init();
}]);
