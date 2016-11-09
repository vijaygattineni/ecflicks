/**
 * Created by vgattineni on 10/1/16.
 */

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ecine'); //connection on local database
mongoose.connect('mongodb://localhost/ecine'); //connection on server database

mongoose.connection.on('error', function (err) {
    console.log("Connection error");
});

module.exports = mongoose;
