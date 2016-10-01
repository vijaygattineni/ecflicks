/**
 * Created by vgattineni on 9/29/16.
 */

var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');

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

module.exports = router;
