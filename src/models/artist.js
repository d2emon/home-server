var mongoose = require('db');

var schema = mongoose.Schema({
  title: {
    type: String,
    required: true
  }
});

schema.methods.encryptPassword = function(password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}

schema.virtual('password')
  .set(function(password) {
    this.__plainPassword = password;
    this.salt = Math.random() + '';
    this.hashedPassword = this.encryptPassword(password);
  })
  .get(function() { return this.__plainPassword; });

schema.methods.checkPassword = function(password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

exports.Artist = mongoose.model('Artist', schema);

