'use strict';
/**
 * Created by vgattineni on 10/29/16.
 */

angular.module('emoviesApp')
  .controller('ProfileCtrl', ['authService', '$rootScope', '$state', function (authService, $rootScope, $state) {
    var self = this;
    self.init = function () {
      self.premiumMovies = [];
      authService.getProfileDetails().then(function (result) {
        console.log(result.data);
        if(result.data === null){
          self.init();
        }else{
          self.userDetails = result.data;
        }
      }, function (err) {
        console.log(err);
      });
    };

    if (!$rootScope.userLoggedIn) {
      $state.go('root.movies');
    } else {
      self.init();
    }
  }]);
