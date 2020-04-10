import express from 'express';
// let News = require('models/news').News;
// let Event = require('models/event').Event;
// let Artist = require('models/artist').Artist;

const router = express.Router();

/* GET home page. */
router.get('/', (req: express.Request, res: express.Response) => res
    .redirect('/index.html'));

router.get('/index.:format?', (req: express.Request, res: express.Response) => {
    // tslint:disable-next-line
    console.log(res.app.locals);
    res
        .render('cherry', {
            title: 'Main',
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
        'footer': [
            {
                title: "Заголовок",
                text: "Какой-то текст",
                list: [
                    "Nights! Absolutely No Extra Charge",
                    "Weekends! Absolutely No Extra Charge",
                    "Holidays! Absolutely No Extra Charge"
                ]
            },
            {
                title: "Заголовок",
                text: "Какой-то текст",
                ending: "Еще какой-то текст"
            },
            {
                title: "Заголовок",
                text: "Какой-то текст"
            }
        ],
        phones: [
            "West Hollywood (323) 221-1107",
            "Beverly Hills (310) 202-5428",
            "Pasadena (626) 296-2664",
            "West Hollywood (323) 221-1107",
            "Beverly Hills (310) 202-5428"
        ],
        social: [
            {
                image: "/images/cherry/facebook.png",
                link: "http://www.facebook.com/?sk=app_2309869772"
            },
            {
                image: "/images/cherry/twitter.png",
                link: "https://twitter.com/psdhtmlcss"
            },
            {
                image: "/images/cherry/vk.png",
                link: "http://vk.com/"
            }
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

export default router;
