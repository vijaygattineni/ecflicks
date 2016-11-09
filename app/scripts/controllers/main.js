'use strict';

/**
 * @ngdoc function
 * @name emoviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emoviesApp
 */
angular.module('emoviesApp').controller('MainCtrl',
  ['$scope', '$rootScope', 'videoService', 'authService', '$filter', '$state',
    function ($scope, $rootScope, videoService, authService, $filter, $state) {
      var self = this;
      $rootScope.currentState = 'Movies';
      self.showLogin = true;

      /*Search Suggestions*/
      self.getSuggestions = function (inputText) {
        var re = new RegExp('^[a-zA-Z0-9]*$');
        if (inputText !== '' && re.test(inputText)) {
          videoService.getSuggestions(inputText).then(function (response) {
            self.suggestionResults = $filter('filter')(response.data.relatedResults, {title: inputText});
          });
        } else {
          self.suggestionResults = [];
        }
      };

      /*SignUp form*/
      self.signUpSubmit = function () {
        authService.signUp({username: self.signUpName, password: self.signUppassword}).then(function(response){
          //alert(response.data.message);
          self.showLogin = true;
        }, function(err){
          alert(err.data.message);
        });
      };

      /*SignIn form*/
      self.signInSubmit = function () {
        authService.signIn({username: self.userName, password: self.password}).then(function(){
          //alert("Login Successful");
          $rootScope.userLoggedIn = true;
          angular.element("#signInModal").modal("hide");
        },function(err){
          alert(err.data.message);
        });
      };

      /*SignOut*/
      self.logout = function() {
        localStorage.removeItem('accessToken');
        $rootScope.userLoggedIn = false;
        $state.go('root.movies');
      };

      /*Close Search Suggestions on body click*/
      angular.element('body').click(function (e) {
        if (e.target.id !== 'search-videos-input') {
          $scope.$apply(function () {
            self.suggestionResults = [];
            self.searchInput = null;
          });
        }
      });

      /*Activate Carousel*/
      angular.element(document).ready(function(){
        angular.element('#topVideos'+$rootScope.currentState).carousel({
          interval: 3000
        });
      });

    }]);
