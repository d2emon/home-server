var express = require('express');
var router = express.Router();
var News = require('models/news').News;
var Event = require('models/event').Event;
var Artist = require('models/artist').Artist;

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/games/index.html');
});

router.get('/index.:format?', function(req, res) {
  Artist.findOne({}, function(err, artist) {
    if (err) throw err;

    News.find({}, function(err, news) {
      if (err) throw err;

      Event.find({}, function(err, events) {
        if (err) throw err;

        res.render('games/index', { 
          title: 'Games',
          chapterMenu: [
            {
	      href: "/games/index.html",
              title: "Игры",
              style: "home"
	    },
            {
	      href: "/games/previews.html",
              title: "Афиша",
              style: "previews"
	    },
            {
	      href: "/games/reviews.html",
              title: "Обзоры",
              style: "reviews"
	    },
            {
	      href: "/games/new-games.html",
              title: "Новые",
              style: "new"
	    },
            {
	      href: "/games/top-games.html",
              title: "Лучшие",
              style: "top"
	    },
            {
	      href: "/games/contacts.html",
              title: "Контакты",
              style: "contacts"
	    },
	  ],
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

module.exports = router;
