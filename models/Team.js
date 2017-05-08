// models/Team.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
  name: String,
  createdOn: { type: Date, default: Date.now },
  createBy: String,
});

module.exports = mongoose.model('Team', TeamSchema);
