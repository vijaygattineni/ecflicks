'use strict';

/**
 * @ngdoc function
 * @name emoviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emoviesApp
 */
angular.module('emoviesApp')
  .controller('MainCtrl', function ($scope, $rootScope, videoService, $filter) {
    var self = this;
    $rootScope.currentState = 'Movies';
    self.showLogin = true;

    /*Search Suggestions*/
    self.getSuggestions = function (inputText){
        var re = new RegExp('^[a-zA-Z0-9]*$');
        if(inputText !== '' && re.test(inputText)) {
           videoService.getSuggestions(inputText).then(function (response) {
             self.suggestionResults = $filter('filter')(response.data.relatedResults, {title: inputText});
             console.log(self.suggestionResults);
          });
        }else{
          self.suggestionResults = [];
        }
    };

    /*Close Search Suggestions on body click*/
    angular.element('body').click(function (e) {
      if (e.target.id !== 'search-videos-input') {
        $scope.$apply(function(){
          self.suggestionResults = [];
          self.searchInput = null;
        });
      }
    });
  });
