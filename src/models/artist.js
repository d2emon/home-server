var mongoose = require('db');
var Tour = require('models/tour').Tour;
var Album = require('models/album').Album;
var Video = require('models/video').Video;

var schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tours: [Tour.schema],
  article: {
    title: String,
    text: String
  },
  albums: [Album.schema],
  videos: [Video.schema]
});

exports.Artist = mongoose.model('Artist', schema);

