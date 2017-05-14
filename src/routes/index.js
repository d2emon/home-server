var express = require('express');
var router = express.Router();
var News = require('models/news').News;
var Event = require('models/event').Event;
var Artist = require('models/artist').Artist;

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/index.html');
});

router.get('/index.:format?', function(req, res) {
  Artist.findOne({}, function(err, artist) {
    if (err) throw err;

    News.find({}, function(err, news) {
      if (err) throw err;

      Event.find({}, function(err, events) {
        if (err) throw err;

        res.render('index', { 
          title: 'About',
          slides: [
            "/images/slider/img1.jpg",
            "/images/slider/img2.jpg",
            "/images/slider/img3.jpg"
          ],
          news: news, 
	  artist: artist,
          events: events,
        });
      });
    });   
  }); 
});

router.get('/audio.:format?', function(req, res) {
  Artist.findOne({}, function(err, artist) {
    if (err) throw err;

    res.render('audio', {
      title: 'Audio',
      albums: artist.albums
    });
  });
});

router.get('/video.:format?', function(req, res) {
  Artist.findOne({}, function(err, artist) {
    if (err) throw err;

    res.render('video', {
      title: 'Video',
      videos: artist.videos,
      links: [
        '',
	'link-style1',
	'link-style2',
      ]
    });
  });
});

router.get('/gallery.:format?', function(req, res) {
  res.render('gallery', { 
    title: 'Gallery',
    images: [
      {
        href: "/images/images/page4-img1.jpg",
	thumb: "/images/images/thumb-1.jpg"
      },
      {
        href: "/images/images/page4-img2.jpg",
	thumb: "/images/images/thumb-2.jpg"
      },
      {
        href: "/images/images/page4-img3.jpg",
	thumb: "/images/images/thumb-3.jpg"
      },
      {
        href: "/images/images/page4-img2.jpg",
	thumb: "/images/images/thumb-2.jpg"
      },
      {
        href: "/images/images/page4-img3.jpg",
	thumb: "/images/images/thumb-3.jpg"
      },
      {
        href: "/images/images/page4-img1.jpg",
	thumb: "/images/images/thumb-1.jpg"
      }
    ]
  });
});

router.get('/tour-dates.:format?', function(req, res) {
  res.render('tours', { 
    title: 'Tour Dates',
    tours: [
      {
        time: "2011-11-09",
	day: "09",
	month: "nov",
	city: "New York",
        text: "Lorem ipsum dolor consctetur",
	tickets: " http://demolink.org/Okedo",
	phone: "+1 959 603 6035"
      },
      {
        time: "2011-11-05",
	day: "05",
	month: "nov",
	city: "Los Angeles",
        text: "Adipisicing elitdo esmod tempor",
	tickets: " http://demolink.org/Okedo",
	phone: "+1 959 603 6035"
      },
      {
        time: "2011-11-01",
	day: "01",
	month: "nov",
	city: "San Diego",
        text: "Lorem ipsum dolor consctetur",
	tickets: " http://demolink.org/Okedo",
	phone: "+1 959 603 6035"
      },
      {
        time: "2011-10-31",
	day: "31",
	month: "oct",
	city: "San Francisco",
        text: "Lorem ipsum dolor consctetur",
	tickets: " http://demolink.org/Okedo",
	phone: "+1 959 603 6035"
      },
      {
        time: "2011-10-29",
	day: "29",
	month: "oct",
	city: "Washington",
        text: "Adipisicing elitdo esmod tempor",
	tickets: " http://demolink.org/Okedo",
	phone: "+1 959 603 6035"
      },
      {
        time: "2011-10-24",
	day: "24",
	month: "oct",
	city: "Las Vegas",
        text: "Lorem ipsum dolor consctetur",
	tickets: " http://demolink.org/Okedo",
	phone: "+1 959 603 6035"
      }
    ],
    past: [
      "Lorem ipsum dolor consctetur",
      "Adipisicing eusmod tempor incididunt",
      "Dolore magna aliqua enim ad minim",
      "Quis nostrud exercitation ullamco laboris",
      "Nisi ut aliquip ex ea commodo",
      "Duis aute irure dolor in reprehenderit",
      "Coluptate velit esse cillum",
      "Dolore eu fugiat nulla pariatur",
      "Excepteur sint occaecat cupidatat",
      "Sunt in culpa qui officia",
      "Deserunt mollit anim id est laborum"
    ]
  });
});

router.get('/contacts.:format?', function(req, res) {
  res.render('contacts', { 
    title: 'Contacts',
    googleMap: "http://maps.google.com/maps?f=q&source=s_q&hl=ru&geocode=&q=Brooklyn,+New+York,+NY,+United+States&aq=0&sll=37.0625,-95.677068&sspn=61.282355,146.513672&ie=UTF8&hq=&hnear=Brooklyn,+Kings,+New+York&ll=40.649974,-73.950005&spn=0.01628,0.025663&z=14&iwloc=A&output=embed",
    api: "AIzaSyAAf325MZjyphK8NE18drFEIBU3t91Gr8g",
    addres: "8901 Marmora Road,<br>Glasgow, D04 89GR.",
    phone: "+1 959 603 6035",
    mail: "mail@demolink.org"
  });
});

module.exports = router;
