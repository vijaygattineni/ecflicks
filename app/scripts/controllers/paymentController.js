/**
 * Created by vgattineni on 11/4/16.
 */

angular.module('emoviesApp')
  .controller('PaymentCtrl', ['$stateParams','$rootScope', 'videoService', '$state', function ($stateParams, $rootScope, videoService, $state) {
    var self = this;
    $stateParams.videoId;
    self.videoId = $stateParams.videoId;

    if(!$rootScope.userLoggedIn){
      alert('Please Sign Up');
      $state.go('root.movies');
    }

    videoService.getVideoDetails(self.videoId).then(function (response) {
      self.videoDetails = (response.data);
    });

    self.pay = function(videoId,title) {
      videoService.payForPremium(videoId,title).then(function () {
        alert('Payment Success');
        $state.go('root.movies');
      },function (err) {
        alert('Payment Error');
      });
    };

    self.subscribe = function() {
      videoService.subscribe().then(function (){
        alert('Now you can view all subscription');
        $state.go('root.movies');
      },function (err){
        alert('Payment Error');
      });
    };

    self.cancel = function(){
      $state.go('root.movies');
    };
  }]);
