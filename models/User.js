// models/User.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: String,
  name: String,
  password: String,
});

UserSchema.set('toObject', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id; 
    return ret;
  }
});

UserSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model('User', UserSchema);
