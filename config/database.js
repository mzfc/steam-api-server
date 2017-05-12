var mongoose = require('mongoose');
var log4js = require('log4js');
var logger = log4js.getLogger();

function connectdb() {
  mongoose.connect('mongodb://127.0.0.1:27017/steam', function (err) {
    if (err) { console.log(err); return; }
    logger.info("mongodb is connected on port 27017");
  });
}

module.exports = connectdb;