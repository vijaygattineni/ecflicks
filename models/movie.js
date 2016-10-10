/**
 * Created by vgattineni on 9/29/16.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
    title : String,
    language: String,
    description: String,
    genere: String,
    country: String,
    posterUrl: String,
    duration: Number,
    year: Number,
    type: String,
    year: Number,
    url: String
},{ collection : 'movieCollection' });

module.exports = mongoose.model('movieCollection', movieSchema);
