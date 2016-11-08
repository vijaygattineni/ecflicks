/**
 * Created by vgattineni on 9/17/16.
 */
'use strict';

/**
 * @ngdoc function
 * @name emoviesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the emoviesApp
 */
angular.module('emoviesApp')
  .controller('VideoCtrl', ['$stateParams','$rootScope', 'videoService', '$state', function ($stateParams, $rootScope, videoService, $state) {
    var self = this;
    self.videoId = $stateParams.videoId;
    self.videoPath = '/images/The_Jungle_Book_2016.mp4';

    self.init = function () {
      if(self.videoId !== null && self.videoId !== ''){
        videoService.getVideo(self.videoId).then(function (response) {
          self.videoDetails = (response.data);
          if(self.videoDetails.videoUrl){
            angular.element("video").attr("src",self.videoDetails.videoUrl);
          }else {
            angular.element("video").attr("src",self.videoDetails.url);
          }
        }, function(err,response){
          $state.go('root.payment',{'videoId': self.videoId});
        });
      }
    };
    if($rootScope.userLoggedIn){
      this.init();
    }else{
      alert('Please Login');
    }
  }]);
