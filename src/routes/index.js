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
  res.render('cherry', { 
    title: 'Main',
    siteName: "Home Server",
    siteDescription: " This is my home server",
    menu: [
      {
        href: "/",
	title: "Главная"
      },
      {
        href: "#",
	title: "Слайдеры"
      },
      {
        href: "#",
	title: "Портфолио"
      },
      {
        href: "#",
	title: "Стили"
      },
      {
        href: "#",
	title: "Блог"
      },
      {
        href: "#",
	title: "Cherry"
      },
      {
        href: "#",
	title: "Контакты"
      }
    ],
    breadcrumbs: [
      {
        href: "/",
	title: "Главная"
      },
      {
        href: "#",
	title: "Промежуточная"
      },
      {
        href: "#",
	title: "Текущая"
      }
    ],
    form: {
      inputs: [
        "Первый пункт",
        "Второй пункт",
        "Третий пункт"
      ],
      select: [
        "Первый пункт",
        "Второй пункт",
        "Третий пункт"
      ],
      radio: [
        "Первый пункт",
        "Второй пункт",
        "Третий пункт"
      ],
      check: [
        "Первый пункт",
        "Второй пункт",
        "Третий пункт"
      ]
    },
    images: [
      "/images/cherry/img1.png",
      "/images/cherry/img2.png",
      "/images/cherry/img3.png"
    ],
    table: {
      titles: [
        "#",
        "Колонка",
        "Графа",
        "Столбец",
        "Раздел",
        "Ссылка",
      ],
      data: [
        [
	  1,
          "Lorem ipsum",
          "At vero eos",
          "Sed",
          "Dolor sit amet",
          "<a href=\"#\">Epd.</a>"
	],
        [
	  2,
          "Lorem ipsum",
          "At vero eos",
          "Sed",
          "Dolor sit amet",
          "<a href=\"#\">Epd.</a>"
	],
        [
	  3,
          "Lorem ipsum",
          "At vero eos",
          "Sed",
          "Dolor sit amet",
          "<a href=\"#\">Epd.</a>"
	],
        [
	  4,
          "Lorem ipsum",
          "At vero eos",
          "Sed",
          "Dolor sit amet",
          "<a href=\"#\">Epd.</a>"
	],
        [
	  5,
          "Lorem ipsum",
          "At vero eos",
          "Sed",
          "Dolor sit amet",
          "<a href=\"#\">Epd.</a>"
	],
      ],
    },
    list: [
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis unde",
      "At vero eos et accusamus"
        + "<ul>"
        + "<li>Lorem ipsum dolor sit amet</li>"
        + "<li>Sed ut perspiciatis unde</li>"
	+ "<li>At vero eos et accusamus</li>"
        + "</ul>",
      "Lorem ipsum dolor sit amet",
      "Sed ut perspiciatis unde",
      "At vero eos et accusamus"
    ],
    sidebar: {
      title: "Заголовок",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed "
        + "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut "
        + "enim ad minim veniam, quis nostrud exercitation ullamco laboris "
        + "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
        + "reprehenderit in "
	+ "<a href=\"#\">voluptate velit esse cillum dolore</a> "
        + "eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "
        + "proident, sunt in culpa qui officia deserunt mollit anim id est "
        + "laborum."
    },
    article: {
      title: "Заголовок…",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed "
        + "do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut "
        + "enim ad minim veniam, quis nostrud exercitation ullamco laboris "
        + "nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
        + "reprehenderit in "
	+ "<a href=\"#\">voluptate velit esse cillum dolore</a> "
        + "eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non "
        + "proident, sunt in culpa qui officia deserunt mollit anim id est "
        + "laborum."
    }
  });
});

module.exports = router;
