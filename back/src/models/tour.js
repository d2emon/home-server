var mongoose = require('db');
var moment = require('moment');

// moment.locale('ru');

var schema = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  city: String,
  title: String,
  tickets: String,
  phone: String,
  text: String
});

schema.virtual('moment')
  .get(function() { return moment(this.date); });

exports.Tour = mongoose.model('Tour', schema);
