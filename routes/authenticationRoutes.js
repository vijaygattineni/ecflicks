/**
 * Created by vgattineni on 10/15/16.
 */
'use strict';
var router = require('express').Router();
var User = require('../models/user');
var Token = require('../models/token');
var Config = require('../config/config');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');

router.post('/signup', function(req,res){
  var data = req.body;
  console.log(data);
  User.findOne({username: data.username}, function(err,result){
    if(err){
      throw err;
    }
    console.log(result);
    if(result !== null) {
      res.status(500).send({
        message: 'user name already exists'
      });
    } else {
      data.activationCode = Math.random().toString(36).substring(7);
      data.accountStatus = 'inActive';
      data.role = 'basic';
      console.log(data);
      var newUser = new User(data);
      newUser.save(function(err){
        if(err) {
          throw err;
        }
        /*Sending Activation mail using nodemailer*/
        var smtpTransport = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'vijaygattineni369@gmail.com',
            pass: 'Aadyasai123$'
          },
          debug: true
        });
        smtpTransport.on('log', console.log);
        var activationUrl = 'http://ecineflix.com/#/profileActivation/'+data.activationCode ;
        console.log('activation URl',activationUrl);
        var mailOptions = {
          from: '"ecineFlix"<vijaygattineni369@gmail.com>', // sender address
          to: data.username, // list of receivers
          subject: 'Sign Up Confirmation', // Subject line
          text: 'Please confirm your eCineFlix Sign up clicking on below Link', // plaintext body
          html: '<a href="'+ activationUrl +'">Click to Confirm Sign Up</a>'// html body
        };

        smtpTransport.sendMail(mailOptions, function(error, info){
          if(error){
            return console.log(error);
          }
          res.send({ message: 'Signed up successfully, Activation mail sent' });
        });

        //res.send({ message: 'Signed up successfully, Activation mail sent' });
      });
    }
  });
});
router.post('/login', function(req,res){
  var data = req.body;
  User.findOne({username: data.username}, function(err,result) {
    if(result === null){
      res.status(500).send({ message: 'User Name Does not exist'});
    }else {
      if (result.password != data.password) {
        // if user is found and password is wrong
        res.status(500).json({message: 'Authentication failed. Wrong password.'});
      }else if (result.accountStatus === 'inActive') {
        res.status(500).json({message: 'Account InActive, Please check your email'});
      }
      else {
        // if user is found and password is right
        // create a token
        var payload = {
          userName: result.username,
          issuedTimeStamp: Date.now()
        };
        var token = jwt.sign(payload, Config.secret, {
          expiresIn: Config.expiresIn //1440 => expires in 24 hours
        });
        //Saving token on user collection
        User.update({username :data.username}, {$set : {'token': token,'issuedTimeStamp': payload.issuedTimeStamp}},false,true);
        // return the information including token as JSON
        res.json({
          token: token,
          userName: data.username
        });
      }
    }
  });
});
router.post('/validateToken', function(req,res){
  // verifying token
  var data = req.body;
  jwt.verify(data.token, Config.secret, function (err, decoded) {
    if (err) {
      return res.status(406).send({message: 'Invalid token.'});
    } else {
      //saving decoded information in request object which can be used in other routes
      return res.send({message: 'Valid'});
    }
  });
});
router.post('/getProfileDetails', function(req,res){
  var token = req.headers['authorization'];
  if(token){
    console.log('got token',token);
    User.findOne({'token': token}, function (err, userDetails) {
      if (err) {
        res.send(err);
      } else {
        console.log('User Details',userDetails);
        res.json(userDetails);
      }
    });
  } else{
    res.status(403);}
});
router.post('/activateProfile/:activationCode', function(req,res){
  User.update({activationCode :req.params.activationCode}, {$set : {'accountStatus': 'Active'}}, function(err, doc){
    if (err) return res.send(500, { error: err });
    return res.send("Account Activated");
  });
});

module.exports = router;

