var mongoose = require('db');

// moment.locale('ru');

var schema = mongoose.Schema({
  title: String,
  thumb: String,
  full: String
});

exports.Image = mongoose.model('Image', schema);
