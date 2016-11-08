/**
 * Created by vgattineni on 10/23/16.
 */
'use strict';
angular.module('emoviesApp').config(function ($provide, $httpProvider) {
  $provide.factory('httpInterceptor', function (localStorageService) {
    return {
      request: function (config) {
        var url = typeof config.url === 'undefined' ? '' : config.url;
        var isHtml = /\.html$/;
        if (!isHtml.test(url)) {
          console.log('interceptor called');
            if (localStorageService.get('accessToken') != null && localStorageService.get('accessToken') != '') {
              console.log('got from localstorage pushed to header');
              $httpProvider.defaults.headers.common['Authorization'] = localStorageService.get('accessToken');
            }
            else {
            delete config.headers.Authorization;
          }
        }
        return config;
      }
    };
  });
  // Add the interceptor to the $httpProvider.
  $httpProvider.interceptors.push('httpInterceptor');
});
