/**
 * Created by vgattineni on 9/29/16.
 */

var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');
var User = require('../models/user');

router.get('/',function (req, res) {
    Movie.find(function (err, movies) {
        if (err) {
            res.send(err);
        } else {
            res.json(movies);
        }
    })
});

router.get('/:movieType',function (req, res) {
    Movie.find({'type': req.params.movieType}, function (err, movies) {
        if (err) {
            res.send(err);
        } else {
            res.json(movies);
        }
    })
});

router.get('/video/:videoId',function (req, res) {
  var token = req.headers['authorization'];
  if(token){
    User.findOne({'token': token}, function (err, userDetails) {
      var userDetails = userDetails;
      var userHasPremium = false;
      //Checking for videoIn PremiumList
      for(var i in userDetails.premiumList){
        if(userDetails.premiumList[i].videoId === req.params.videoId){
          userHasPremium = true;
        }
      }
      Movie.findOne({'videoId': req.params.videoId}, function (err, VideoDetails) {
        if (err) {
          res.send(err);
        } else {
          if(userHasPremium || (VideoDetails.type === 'subscription' && userDetails.role && userDetails.role === 'subscribed')){
            res.json(VideoDetails);
          }
          else{
            res.status(500).send({ message: 'No Access'});
          }
        }
      });
    });
  } else{
    res.status(403);
  }

});

router.get('/videoDetails/:videoId',function (req, res) {
  var token = req.headers['authorization'];
  if(token){
    User.findOne({'token': token}, function (err, userDetails) {
      var userRole = userDetails.role;
      Movie.findOne({'videoId': req.params.videoId}, function (err, VideoDetails) {
        if (err) {
          res.send(err);
        } else {
          VideoDetails['videoUrl'] = null;
          var modifiedResponse = {'title':VideoDetails.title, 'genere': VideoDetails.genere, 'language': VideoDetails.language, 'year': VideoDetails.year, 'type': VideoDetails.type};
          res.json(modifiedResponse);
        }
      });
    });
  } else{
    res.status(403);
  }

});

router.get('/payForPremium/:videoId/:videoName',function (req, res) {
  var token = req.headers['authorization'];
  if(token){
    User.findOne({'token': token}, function (err, userDetails) {
      var username = userDetails.username;
      userDetails.premiumList.push({'videoId': req.params.videoId, 'videoName': req.params.videoName});
      User.update({username :username}, {$set : {'premiumList': userDetails.premiumList}}, function(err, doc){
          if (err) return res.send(500, { error: err });
          return res.send("succesfully saved");
        });
    });
  } else{
    res.status(403);
  }

});

router.get('/subscription/pay',function (req, res) {
  var token = req.headers['authorization'];
  if(token){
    User.findOne({'token': token}, function (err, userDetails) {
      var username = userDetails.username;
      User.update({username :username}, {$set : {'role': 'subscribed'}}, function(err, doc){
        if (err) return res.send(500, { error: err });
        return res.send("succesfully saved");
      });
    });
  } else{
    res.status(403);
  }

});

module.exports = router;
