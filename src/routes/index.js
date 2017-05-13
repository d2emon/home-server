var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/index.html');
});

router.get('/index.:format?', function(req, res) {
  res.render('index', { 
    title: 'About',
    news: [
      {
        time: "2011-11-09",
	day: "09",
	month: "nov",
        text: "Rock Band is one of <a class=\"link\" target=\"_blank\" href=\"http://blog.templatemonster.com/free-website-templates/\">free website templates</a> created by Template Monster team."
      },
      {
        time: "2011-11-07",
	day: "07",
	month: "nov",
        text: "This <a class=\"link\" target=\"_blank\" href=\"http://blog.templatemonster.com/2011/11/21/free-website-template-jquery-gallery-music/ \">Rock Band Template</a> goes with two packages – with PSD source files and without them."
      },
      {
        time: "2011-11-02",
	day: "02",
	month: "nov",
        text: "PSD source files are available for free for the registered members <br />of Templates.com."
      }
    ],
    tours: [
      {
        time: "2011-11-09",
	day: "09",
	month: "nov",
	city: "New York",
        text: "Lorem ipsum dolor consctetur"
      },
      {
        time: "2011-11-05",
	day: "05",
	month: "nov",
	city: "Los Angeles",
        text: "Adipisicing elitdo esmod tempor"
      },
      {
        time: "2011-11-01",
	day: "01",
	month: "nov",
	city: "San Diego",
        text: "Lorem ipsum dolor consctetur"
      },
    ],
    events: [
      {
        time: "2011-11-09",
	day: "09",
	month: "nov",
        text: "Lorem ipsum dolor consctetur adipisicing elitdo eusmod tempor incididunt ut labore."
      },
      {
        time: "2011-11-03",
	day: "03",
	month: "nov",
        text: "Lorem ipsum dolor consctetur adipisicing elitdo eusmod tempor incididunt ut labore."
      },
    ],
    videos: [
      {
	link: "/video/video_AS3.swf?width=495&amp;height=275&amp;fileVideo=intro06.flv",
	thumb: "/images/page1-img2.jpg"
      }
    ],
    article: {
      title: "Sed ut perspiciatis unde omnis",
      text: "Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas aspernatur."
    },
    stores: "/images/page1-img1.jpg"
  });
});

router.get('/audio.:format?', function(req, res) {
  res.render('audio', {
    title: 'Audio',
    albums: [
      {
        title: "Genres Remixes",
	image: "/images/albums/page2-img1.jpg",
	year: "2011",
	description: "Lorem ipsum dolor consctetur adipisicing elitdo eusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	tracks: [
	  {
            id: "01",
	    title: "Duis aute irure dolor"
	  },
	  {
            id: "02",
	    title: "In reprehenderit in voluptate"
	  },
	  {
            id: "03",
	    title: "Velit esse cillum dolore"
	  },
	  {
            id: "04",
	    title: "Eu fugiat nulla pariatur"
	  },
	  {
            id: "05",
	    title: "Excepteur sint occaecat"
	  },
	  {
            id: "06",
	    title: "Cupidatat non"
	  },
	  {
            id: "07",
	    title: "Proident sunt in"
	  },
	  {
            id: "08",
	    title: "Culpa qui officia deserunt mollit"
	  },
	  {
            id: "09",
	    title: "Anim id est laborum"
	  },
	  {
            id: "10",
	    title: "At vero eos et accusamus"
	  },
	  {
            id: "11",
	    title: "Et iusto odio dignissimos"
	  }
	]
      },
      {
        title: "Genres",
	image: "/images/albums/page2-img2.jpg",
	year: "2010",
	description: "Lorem ipsum dolor consctetur adipisicing elitdo eusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	tracks: [
	  {
            id: "01",
	    title: "Duis aute irure dolor"
	  },
	  {
            id: "02",
	    title: "In reprehenderit in voluptate"
	  },
	  {
            id: "03",
	    title: "Velit esse cillum dolore"
	  },
	  {
            id: "04",
	    title: "Eu fugiat nulla pariatur"
	  },
	  {
            id: "05",
	    title: "Excepteur sint occaecat"
	  },
	  {
            id: "06",
	    title: "Cupidatat non"
	  },
	  {
            id: "07",
	    title: "Proident sunt in"
	  },
	  {
            id: "08",
	    title: "Culpa qui officia deserunt mollit"
	  },
	  {
            id: "09",
	    title: "Anim id est laborum"
	  },
	  {
            id: "10",
	    title: "At vero eos et accusamus"
	  }
	]
      },
      {
        title: "Rock & Roll",
	image: "/images/albums/page2-img3.jpg",
	year: "2010",
	description: "Lorem ipsum dolor consctetur adipisicing elitdo eusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	tracks: [
	  {
            id: "01",
	    title: "Duis aute irure dolor"
	  },
	  {
            id: "02",
	    title: "In reprehenderit in voluptate"
	  },
	  {
            id: "03",
	    title: "Velit esse cillum dolore"
	  },
	  {
            id: "04",
	    title: "Eu fugiat nulla pariatur"
	  },
	  {
            id: "05",
	    title: "Excepteur sint occaecat"
	  },
	  {
            id: "06",
	    title: "Cupidatat non"
	  },
	  {
            id: "07",
	    title: "Proident sunt in"
	  },
	  {
            id: "08",
	    title: "Culpa qui officia deserunt mollit"
	  },
	  {
            id: "09",
	    title: "Anim id est laborum"
	  },
	  {
            id: "10",
	    title: "At vero eos et accusamus"
	  },
	  {
            id: "11",
	    title: "Et iusto odio dignissimos"
	  }
	]
      }
    ]
  });
});

router.get('/video.:format?', function(req, res) {
  res.render('video', { 
    title: 'Video'
  });
});

router.get('/gallery.:format?', function(req, res) {
  res.render('gallery', { 
    title: 'Gallery'
  });
});

router.get('/tour-dates.:format?', function(req, res) {
  res.render('tours', { 
    title: 'Tour Dates'
  });
});

router.get('/contacts.:format?', function(req, res) {
  res.render('contacts', { 
    title: 'Contacts'
  });
});

module.exports = router;
