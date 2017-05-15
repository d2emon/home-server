var express = require('express');
var router = express.Router();
var News = require('models/news').News;
var Event = require('models/event').Event;
var Artist = require('models/artist').Artist;

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/rock/index.html');
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
  Artist.findOne({}, function(err, artist) {
    if (err) throw err;

    res.render('gallery', {
      title: 'Gallery',
      images: artist.images
    });
  });
});

router.get('/tour-dates.:format?', function(req, res) {
  Artist.findOne({}, function(err, artist) {
    if (err) throw err;
    console.log(artist.tours);

    res.render('tours', {
      title: 'Tour Dates',
      tours: artist.tours.slice(0, 6),
      past: artist.tours.slice(6),
    });
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
