/**
 * Created by vgattineni on 10/17/16.
 */
'use strict';
angular.module('emoviesApp')
  .service('authService', [ '$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {
    var baseUrl = 'http://localhost:8080';
    this.signUp = function (data) {
        var signupUrl =  baseUrl+'/signup';
        return $http.post(signupUrl,data)
          .then(function (response) {
            return response;
          },
          function (err) {
            return $q.reject(err);
          });
      };
    this.signIn = function (data) {
        var signInUrl =  baseUrl+'/login';
        return $http.post(signInUrl,data)
          .then(function (response) {
            localStorageService.set('accessToken',response.data.token);
            console.log('token pushed into localStorageService');
            return response;
          },
          function (err) {
            return $q.reject(err);
          });
    };
    this.tokenStatus = function(token){
      var tokenStatusUrl = baseUrl+'/validateToken';
      return $http.post(tokenStatusUrl,token)
        .then(function (response) {
          return response;
        },
        function (err) {
        return $q.reject(err);
      });
    };
    this.getProfileDetails = function(){
      var profileDetailsUrl = baseUrl+'/getProfileDetails';
      return $http.post(profileDetailsUrl)
        .then(function (response) {
          return response;
        },
        function (err) {
          return $q.reject(err);
        });
    };
    this.profileActivation = function(activationCode){
      var profileActivationUrl =  baseUrl+'/activateProfile/'+activationCode;
      return $http.post(profileActivationUrl)
        .then(function (response) {
          return response;
        },
        function (err) {
          return $q.reject(err);
        });
    };
  }]);
