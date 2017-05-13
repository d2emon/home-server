var User = require('models').User;

var user = new User({
  username: "Tester5",
  password: "seceret"
});

user.save(function(err, user, affected) {
  if (err) throw err

  user.findOne({ username: "Tester" }, function(err, tester) {
    console.log(tester);
  });
});

