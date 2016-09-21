'use strict';

/**
 * @ngdoc function
 * @name emoviesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emoviesApp
 */
angular.module('emoviesApp')
  .controller('MainCtrl', function () {
    var self = this;
    self.moviesTabActive = true;

    //Popover
    $(document).ready(function(){
      $('[data-toggle="popover"]').popover();
    });
    //Close popover on body click
    $('body').on('click', function (e) {
      $('[data-toggle="popover"]').each(function () {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
          $(this).popover('hide');
        }
      });
    });

  });
