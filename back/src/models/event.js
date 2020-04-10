var mongoose = require('db');
var moment = require('moment');

// moment.locale('ru');

var schema = mongoose.Schema({
  date: Date,
  title: String,
  text: String
});

schema.virtual('moment')
  .get(function() { return moment(this.date); });

exports.Event = mongoose.model('Event', schema);
