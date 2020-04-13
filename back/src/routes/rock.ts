import express from 'express';
// let News = require('models/news').News;
// let Event = require('models/event').Event;
// let Artist = require('models/artist').Artist;

const router = express.Router();

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response) => res
    .redirect('/rock/index.html'));

router.get('/index.:format?', (req: express.Request, res: express.Response) => {
  /*
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
          news,
	  artist,
          events,
        });
      });
    });
  });
  */
  return res.json({});
});

router.get('/audio.:format?', (req: express.Request, res: express.Response) => {
  /*
  Artist.findOne({}, function(err, artist) {
    if (err) throw err;

    res.render('audio', {
      title: 'Audio',
      albums: artist.albums
    });
  });
  */
  return res.json({});

});

router.get('/video.:format?', (req: express.Request, res: express.Response) => {
  /*
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
   */
  return res.json({});
});

router.get('/gallery.:format?', (req: express.Request, res: express.Response) => {
  /*
  Artist.findOne({}, function(err, artist) {
    if (err) throw err;

    res.render('gallery', {
      title: 'Gallery',
      images: artist.images
    });
  });
   */
  return res.json({});
});

router.get('/tour-dates.:format?', (req: express.Request, res: express.Response) => {
  /*
  Artist.findOne({}, function(err, artist) {
    if (err) throw err;
    console.log(artist.tours);

    res.render('tours', {
      title: 'Tour Dates',
      tours: artist.tours.slice(0, 6),
      past: artist.tours.slice(6),
    });
  });
   */
  return res.json({});
});

router.get('/contacts.:format?', (req: express.Request, res: express.Response) => res
    .render('contacts', {
        title: 'Contacts',
        googleMap: "http://maps.google.com/maps?f=q&source=s_q&hl=ru&geocode=&q=Brooklyn,+New+York,+NY,+United+States&aq=0&sll=37.0625,-95.677068&sspn=61.282355,146.513672&ie=UTF8&hq=&hnear=Brooklyn,+Kings,+New+York&ll=40.649974,-73.950005&spn=0.01628,0.025663&z=14&iwloc=A&output=embed",
        api: "AIzaSyAAf325MZjyphK8NE18drFEIBU3t91Gr8g",
        address: "8901 Marmora Road,<br>Glasgow, D04 89GR.",
        phone: "+1 959 603 6035",
        mail: "mail@demolink.org"
    }));

export default router;
