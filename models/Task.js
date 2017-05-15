// models/Task.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  subject: String,
  description: String,
  points: Number,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
  teamId: String,
});

TaskSchema.set('toObject', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id; 
    return ret;
  }
});

TaskSchema.set('toJSON', {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model('Task', TaskSchema);
