var mongoose = require('db');

// moment.locale('ru');

var schema = mongoose.Schema({
  trackno: Number,
  title: String
});

exports.Track = mongoose.model('Track', schema);
