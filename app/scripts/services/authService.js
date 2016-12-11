/**
 * Created by vgattineni on 10/17/16.
 */
'use strict';
angular.module('emoviesApp')
  .service('authService', [ '$http', '$q', function ($http, $q) {
    var baseUrl = 'http://www.ecineflix.com/api/auth';
    //var baseUrl = 'http://localhost:8080/api/auth';
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
            localStorage.setItem('accessToken',response.data.token);
            console.log('Got access token to localstorage',response.data.token);
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
      var profileDetailsUrl = baseUrl+'/profileDetails';
      return $http.get(profileDetailsUrl)
        .then(function (response) {
          return response;
        },
        function (err) {
          return $q.reject(err);
        });
    };
    this.profileActivation = function(activationCode){
      var profileActivationUrl =  baseUrl+'/activateProfile/'+activationCode;
      return $http.put(profileActivationUrl)
        .then(function (response) {
          return response;
        },
        function (err) {
          return $q.reject(err);
        });
    };
  }]);
