var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Express',
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

module.exports = router;
