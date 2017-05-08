// models/Team.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
  name: String,
  createdOn: { type: Date, default: Date.now },
  createBy: String,
});

TeamSchema.set('toObject', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  }
});

TeamSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model('Team', TeamSchema);
