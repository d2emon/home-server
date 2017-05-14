var User = require('models/user').User;
var Artist = require('models/artist').Artist;
var News = require('models/news').News;
var Tour = require('models/tour').Tour;
var Album = require('models/album').Album;
var Video = require('models/video').Video;
var Event = require('models/event').Event;
var Track = require('models/track').Track;

var news = [
  new News({
    published: new Date(2011, 10, 9),
    text: "Rock Band is one of <a class=\"link\" target=\"_blank\" href=\"http://blog.templatemonster.com/free-website-templates/\">free website templates</a> created by Template Monster team."
  }), 
  new News({
    published: new Date(2011, 10, 7),
    text: "This <a class=\"link\" target=\"_blank\" href=\"http://blog.templatemonster.com/2011/11/21/free-website-template-jquery-gallery-music/ \">Rock Band Template</a> goes with two packages – with PSD source files and without them."
  }), 
  new News({
    published: new Date(2011, 10, 2),
    text: "PSD source files are available for free for the registered members <br />of Templates.com."
  }) 
];

var events = [
  new Event({
    date: new Date(2011, 10, 9),
    text: "Lorem ipsum dolor consctetur adipisicing elitdo eusmod tempor incididunt ut labore."
  }),
  new Event({
    date: new Date(2011, 11, 3),
    text: "Lorem ipsum dolor consctetur adipisicing elitdo eusmod tempor incididunt ut labore."
  })
];

var tours = [
  new Tour({
    date: new Date(2011, 10, 9),
    city: "New York",
    text: "Lorem ipsum dolor consctetur",
    tickets: "http://demolink.org/Okedo",
    phone: "+1 959 603 6035"
  }),
  new Tour({
    date: new Date(2011, 10, 5),
    city: "Los Angeles",
    text: "Adipisicing elitdo esmod tempor",
    tickets: "http://demolink.org/Okedo",
    phone: "+1 959 603 6035"
  }),
  new Tour({
    date: new Date(2011, 10, 1),
    city: "San Diego",
    text: "Lorem ipsum dolor consctetur",
    tickets: "http://demolink.org/Okedo",
    phone: "+1 959 603 6035"
  }),
  new Tour({
    date: new Date(2011, 9, 31),
    city: "San Francisco",
    text: "Lorem ipsum dolor consctetur",
    tickets: "http://demolink.org/Okedo",
    phone: "+1 959 603 6035"
  }),
  new Tour({
    date: new Date(2011, 9, 29),
    city: "Washington",
    text: "Adipisicing elitdo esmod tempor",
    tickets: "http://demolink.org/Okedo",
    phone: "+1 959 603 6035"
  }),
  new Tour({
    date: new Date(2011, 9, 24),
    city: "Las Vegas",
    text: "Lorem ipsum dolor consctetur",
    tickets: "http://demolink.org/Okedo",
    phone: "+1 959 603 6035"
  })
];

var videos = [
  new Video({
    title: "Temporibus autem quibusdam",
    link: "/video/video_AS3.swf?width=495&amp;height=275&amp;fileVideo=intro06.flv",
    thumb: "/images/videos/page3-img1.jpg",
    rate: 0
  }),
  new Video({
    title: "Temporibus autem quibusdam",
    link: "/video/video_AS3.swf?width=495&amp;height=275&amp;fileVideo=intro06.flv",
    thumb: "/images/videos/page3-img2.jpg",
    rate: 1
  }),
  new Video({
    title: "Temporibus autem quibusdam",
    link: "/video/video_AS3.swf?width=495&amp;height=275&amp;fileVideo=intro06.flv",
    thumb: "/images/videos/page3-img3.jpg",
    rate: 2
  }),
  new Video({
    title: "Temporibus autem quibusdam",
    link: "/video/video_AS3.swf?width=495&amp;height=275&amp;fileVideo=intro06.flv",
    thumb: "/images/videos/page3-img4.jpg",
    rate: 0
  }),
  new Video({
    title: "Temporibus autem quibusdam",
    link: "/video/video_AS3.swf?width=495&amp;height=275&amp;fileVideo=intro06.flv",
    thumb: "/images/videos/page3-img5.jpg",
    rate: 1
  }),
  new Video({
    title: "Temporibus autem quibusdam",
    link: "/video/video_AS3.swf?width=495&amp;height=275&amp;fileVideo=intro06.flv",
    thumb: "/images/videos/page3-img6.jpg",
    rate: 2
  })
];

var tracks = [
  new Track({
    trackno: 1,
    title: "Duis aute irure dolor"
  }),
  new Track({
    trackno: 2,
    title: "In reprehenderit in voluptate"
  }),
  new Track({
    trackno: 3,
    title: "Velit esse cillum dolore"
  }),
  new Track({
    trackno: 4,
    title: "Eu fugiat nulla pariatur"
  }),
  new Track({
    trackno: 5,
    title: "Excepteur sint occaecat"
  }),
  new Track({
    trackno: 6,
    title: "Cupidatat non"
  }),
  new Track({
    trackno: 7,
    title: "Proident sunt in"
  }),
  new Track({
    trackno: 8,
    title: "Culpa qui officia deserunt mollit"
  }),
  new Track({
    trackno: 9,
    title: "Anim id est laborum"
  }),
  new Track({
    trackno: 10,
    title: "At vero eos et accusamus"
  }),
  new Track({
    trackno: 11,
    title: "Et iusto odio dignissimos"
  })
];

var albums = [
  new Album({
    title: "Genres Remixes",
    date: new Date(2011, 0, 1),
    thumb: "/images/albums/page2-img1.jpg",
    description: "Lorem ipsum dolor consctetur adipisicing elitdo eusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tracks: tracks
  }), 
  new Album({
    title: "Genres",
    date: new Date(2010, 0, 1),
    thumb: "/images/albums/page2-img2.jpg",
    description: "Lorem ipsum dolor consctetur adipisicing elitdo eusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tracks: tracks.slice(1, 10)
  }), 
  new Album({
    title: "Rock & Roll",
    date: new Date(2010, 0, 1),
    thumb: "/images/albums/page2-img3.jpg",
    description: "Lorem ipsum dolor consctetur adipisicing elitdo eusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tracks: tracks
  }), 
];

var artist = Artist({
  title: "RockBand",
  tours: tours,
  article: {
    title: "Sed ut perspiciatis unde omnis",
    text: "Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas aspernatur."
  },
  albums: albums,
  videos: videos
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

for (n in news) {
  news[n].save(function(err, news, affected) {
    if (err) throw err;

    console.log('News added: ' + news);
  });
}

for (e in events) {
  events[e].save(function(err, event, affected) {
    if (err) throw err;

    console.log('Event added: ' + event);
  });
}

Artist.count({ title: artist.title}, function(err, c) {
  if (c > 0) {
    console.log('Artist ' + artist.title + ' exists(' + c + ').');
  } else {
    artist.save(function(err, artist, affected) {
      if (err) throw err;

      console.log('Artist is ' + artist + '. Saved ' + affected + ' times.');
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
