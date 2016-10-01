/**
 * Created by vgattineni on 10/1/16.
 */

// call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var dbConnection = require('./db_connection/dbConnection');
var movieRoutes = require('./routes/moviesRoutes');

// configure app to use bodyParser() this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;        // set our port from env or use 8000

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

// middleware to use for all requests
app.use(function (req, res, next) {
  // do logging
  if (true) {
    console.log('Authenticated user');
    next();   // make sure we go to the next routes and don't stop here
  } else {
    res.sendStatus(403);
  }
});

// Register routes
app.use('/api/movies', movieRoutes);

// Start the server
app.listen(port);
console.log('Server running on port ' + port);
