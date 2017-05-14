var mongoose = require('mongoose');
var config = require('config');

console.log(config.get('mongo:uri'))
mongoose.connect(config.get('mongo:uri'), config.get('mongo:options'));

module.exports = mongoose;
