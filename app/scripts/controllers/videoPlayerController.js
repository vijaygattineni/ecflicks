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
  .controller('VideoCtrl', function ($stateParams) {
    var self = this;
    self.videoName = $stateParams.videoName;
    self.videoId = $stateParams.videoId;

    //Service call
    self.getVideoUrl = function (videoName,videoId) {
      self.videoPath = '/images/The_Jungle_Book_2016.mp4';
      self.videoTitle = 'The Jungle Book 2016';
      return self.videoPath;
    };

    self.init = function () {
      var videoUrl = self.getVideoUrl(self.videoName,self.videoId);
    };

    this.init();
  });
