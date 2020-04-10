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
          subtitle: "Morbi volutpat leo in ligula. Integer vel magna. Quisque"
	    + " ut magna et nisi bibendum sagittis. Fusce",
          items: [
            "Morbi volutpat leo in",
            "ligula. Integer vel lorem",
            "magna. Quisque ut",
            "umagna et nisi bibendum",
            "sagittis. Fusce elit ligula,",
            "sodales sit amet",
            "Morbi volutpat leo in",
            "ligula. Integer vel lorem",
            "magna. Quisque ut",
            "umagna et nisi bibendum",
            "sagittis. Fusce elit ligula,",
            "sodales sit amet"
          ],
          reviews: [
            {
              image: "/images/games/img_previews.jpg",
              title: "Morbi volutpat leo in ligula.",
	      text: "<a href=\"#\">Cras quam augue, consectetuer</a> ut, "
                + "tincidunt a, velit. Quisque euismod tortor sed nulla. Nunc"
                + " dapibus, nisi et iaculis",
              score: 67,
	    },
            {
              image: "/images/games/img_previews-12.jpg",
              title: "Morbi volutpat leo in ligula.",
	      text: "<a href=\"#\">Cras quam augue, consectetuer</a> ut, "
                + "tincidunt a, velit. Quisque euismod tortor sed nulla. Nunc"
                + " dapibus, nisi et iaculis",
              score: 82,
	    },
            {
              image: "/images/games/img_previews-15.jpg",
              title: "Morbi volutpat leo in ligula.",
	      text: "<a href=\"#\">Cras quam augue, consectetuer</a> ut, "
                + "tincidunt a, velit. Quisque euismod tortor sed nulla. Nunc"
                + " dapibus, nisi et iaculis",
              score: 79,
	    },
            {
              image: "/images/games/img_previews-16.jpg",
              title: "Morbi volutpat leo in ligula.",
	      text: "<a href=\"#\">Cras quam augue, consectetuer</a> ut, "
                + "tincidunt a, velit. Quisque euismod tortor sed nulla. Nunc"
                + " dapibus, nisi et iaculis",
              score: 91,
	    },
          ],
          newGames: [
            {
              image: "/images/games/img_new.jpg",
              title: "Morbi volutpat leo in ligula.",
	      text: "<a href=\"#\">Cras quam augue, consectetuer</a> ut, "
                + "tincidunt a, velit. Quisque euismod tortor sed nulla. Nunc"
                + " dapibus, nisi et iaculis",
              score: 67,
	    },
            {
              image: "/images/games/img_new-11.jpg",
              title: "Morbi volutpat leo in ligula.",
	      text: "<a href=\"#\">Cras quam augue, consectetuer</a> ut, "
                + "tincidunt a, velit. Quisque euismod tortor sed nulla. Nunc"
                + " dapibus, nisi et iaculis",
              score: 82,
	    },
            {
              image: "/images/games/img_new-13.jpg",
              title: "Morbi volutpat leo in ligula.",
	      text: "<a href=\"#\">Cras quam augue, consectetuer</a> ut, "
                + "tincidunt a, velit. Quisque euismod tortor sed nulla. Nunc"
                + " dapibus, nisi et iaculis",
              score: 79,
	    },
            {
              image: "/images/games/img_new-14.jpg",
              title: "Morbi volutpat leo in ligula.",
	      text: "<a href=\"#\">Cras quam augue, consectetuer</a> ut, "
                + "tincidunt a, velit. Quisque euismod tortor sed nulla. Nunc"
                + " dapibus, nisi et iaculis",
              score: 91,
	    },
          ],
          random: {
            title: "",
            image: "/images/games/img_feat.jpg",
            text: "Morbi volutpat leo in ligula. Integer vel magna. "
              + "<a href=\"#\">Quisque ut magna</a> et nisi bibendum "
              + "sagittis. Fusce",
            score: 76,
          },
          wanted: {
            title: "",
            image: "/images/games/img_wanted.jpg",
            text: "Morbi volutpat leo in ligula. Integer vel magna. "
              + "<a href=\"#\">Quisque ut magna</a> et nisi bibendum "
              + "sagittis. Fusce",
            score: 76,
          },
          news: news, 
	  artist: artist,
          events: events,
        });
      });
    });   
  }); 
});

module.exports = router;
