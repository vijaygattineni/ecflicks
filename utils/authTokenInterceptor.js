/**
 * Created by vgattineni on 10/17/16.
 */

'use strict';
var Config = require('../config/config');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var Token = require('../models/token');


module.exports = function(req, res, next){
  var token = req.headers['authorization'];
  //console.log('Obtained token',token);
  if(token) {
    User.findOne({token:token}, function(err,doc){
      if(err){
        throw err;
      }
      else {
        // verifying token
        jwt.verify(token, Config.secret, function (err, decoded) {
          if (err) {
            return res.status(406).send({message: 'Invalid token.'});
          } else {
            //saving decoded information in request object which can be used in other routes
            req.decoded = decoded;
            next();
          }
        });
      }
    });
  } else {
// if there is no token check wether the api endoint is present in jwtExcludeEndpoints array
    var flag = false;
    for (var endpoint in Config.jwtExcludeEndpoints) {
      if (req.url.indexOf(Config.jwtExcludeEndpoints[endpoint]) !== -1) {
        flag = true;
        break;
      }
    }
    if (flag) {
      next();
    } else {
      return res.status(403).send({
        message: 'missing authentication token in the headers.'
      });
    }
  }
}
