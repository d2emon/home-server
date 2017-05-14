var mongoose = require('db');
var Track = require('models/track').Track;

// moment.locale('ru');

var schema = mongoose.Schema({
  title: String,
  date: Date,
  thumb: String,
  description: String,
  tracks: [Track.schema]
});

exports.Album = mongoose.model('Album', schema);
