/**
 * Created by vgattineni on 10/1/16.
 */

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/ecine'); // connecting to Local database
mongoose.connect('mongodb://54.210.16.72:27017/ecine'); // connecting to Server database
mongoose.connection.on('error', function (err) {
    console.log("Connection error");
});

module.exports = mongoose;
