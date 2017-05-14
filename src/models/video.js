var mongoose = require('db');

// moment.locale('ru');

var schema = mongoose.Schema({
  title: String,
  thumb: String,
  link: String,
  rate: Number
});

exports.Video = mongoose.model('Video', schema);
