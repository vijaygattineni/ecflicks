/**
 * Created by vgattineni on 10/17/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tokenSchema = new Schema({
  token: String

}, {collection : 'tokenCollection'});

module.exports = mongoose.model('tokenCollection', tokenSchema);
