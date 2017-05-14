var mongoose = require('db');

// moment.locale('ru');

var schema = mongoose.Schema({
  title: String,
  thumb: String,
});

exports.Album = mongoose.model('Album', schema);
