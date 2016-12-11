/**
 * Created by vgattineni on 10/1/16.
 */

// call the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var dbConnection = require('./db_connection/dbConnection');
var movieRoutes = require('./routes/moviesRoutes');
var authRoutes = require('./routes/authenticationRoutes');
var corsHandler = require('./utils/cors');
var authTokenInterceptor = require('./utils/authTokenInterceptor');
const Config = require('./config/config.js');
var User = require('./models/user');
// configure app to use bodyParser() this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/app'));

var port = process.env.PORT || 8080;        // set our port from env or use 8000

app.use(corsHandler);
app.use(authTokenInterceptor);

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);


// Start the server
app.listen(port, function (){
});
console.log('Server running on port ' + port);
