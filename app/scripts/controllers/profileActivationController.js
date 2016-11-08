
/**
 * Created by vgattineni on 11/7/16.
 */

angular.module('emoviesApp')
  .controller('profileActivationCtrl', ['authService', '$stateParams', '$state', function (authService, $stateParams, $state) {
    var self = this;
    self.init = function () {
      authService.profileActivation($stateParams.activationCode).then(function (result) {
        self.statusMessage = result.data;
      }, function (err) {
        self.statusMessage = 'Activation Failed';
      });
    };

    if($stateParams.activationCode){
      self.init();
    }else {
      $state.go('root.movies');
    }
  }]);
