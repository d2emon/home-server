var User = require('models/user').User;
var Artist = require('models/artist').Artist

var artist = Artist({
  title: "RockBand"
});

var user = new User({
  username: "User",
  password: "secret"
});

function findFreeUser(user, appendix, callback) {
  User.count({ username: user.username + appendix}, function(err, c) {
    if (c > 0) {
      console.log('User ' + user.username + appendix + ' exists.');
      // findFreeUser(user, appendix + 1, callback);
    } else {
      console.log('User ' + user.username + appendix + ' free.');
      user.username += appendix;
      if (callback) callback(user);
    }
    return 0;
  });
  return 0;
}

Artist.count({ title: artist.title}, function(err, c) {
  if (c > 0) {
    console.log('Artist ' + artist.title + ' exists(' + c + ').');
  } else {
    artist.save(function(err, artist, affected) {
      if (err) throw err;

      console.log('Artist is ' + artist + '. Saved ' + affected + ' times.');
      return 0;
    });
    console.log('Artist saved');
  }
});

findFreeUser(user, 0, function(user) {
  console.log('freeUser:' + user.username);
  user.save(function(err, user, affected) {
    if (err) throw err

    User.findOne({ username: user.username }, function(err, tester) {
      console.log('User is ' + tester);
      console.log('User saved');
    });
  });
});
