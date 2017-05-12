var db = require("db");
var log = require('logger')(module);

db.connect();

var User = require('./user');

function run() {
  var mikhalych = new User("МихалычЪ");
  var toma = new User("Тома");

  mikhalych.hello(toma);

  log(db.getPhrase("Run successful"));
}

if (module.parent) {
  exports.run = run;
} else {
  run();
}
