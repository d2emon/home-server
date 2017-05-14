var mongoose = require('db');
var moment = require('moment');

// moment.locale('ru');

var schema = mongoose.Schema({
  published: {
    type: Date,
    default: Date.now
  },
  title: String,
  text: String
});

schema.virtual('moment')
  .get(function() { return moment(this.published); });

exports.News = mongoose.model('News', schema);
