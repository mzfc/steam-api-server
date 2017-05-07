var mongoose = require('mongoose');

function connectdb() {
  mongoose.connect('mongodb://127.0.0.1:27017/steam', function (err) {
    if (err) { console.log(err); return; }
    console.log("Client DB: connected");
  });
}

module.exports = connectdb;