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
app.use(express.static(__dirname + '/app'));

var port = process.env.PORT || 8080;        // set our port from env or use 8000

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});

// Register routes
app.use('/api/movies', movieRoutes);

// Start the server
app.listen(port);
console.log('Server running on port ' + port);
