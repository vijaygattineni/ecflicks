/**
 * Created by vgattineni on 10/16/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  role: String,
  token: String,
  issuedTimeStamp: String,
  premiumList: [],
  accountStatus: String,
  activationCode: String
}, {collection : 'userCollection'});

module.exports = mongoose.model('userCollection', userSchema);
