import express from 'express';
import albums from './albums';
import genres from './genres';
import instruments from './instruments';
import lists from './lists';
import misheard from './misheard';
import songs from './songs';
import subcultures from './subcultures';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => res.json({
    'contents': [
        {
            'title': 'Misheard Lyrics',
            'link': '/api/music/misheard',
        },
        {
            'title': 'Инструменты',
            'link': '/api/music/instruments',
        },
        {
            'title': 'Альбомы',
            'link': '/api/music/albums',
        },
        {
            'title': 'Песенник',
            'link': '/api/music/songs',
        },
        {
            'title': 'Списки',
            'link': '/api/music/playlists',
        },
        {
            'title': 'Стили',
            'link': '/api/music/genres',
        },
        {
            'title': 'Субкультуры',
            'link': '/api/music/subcultures',
        },
    ],
}));

router.get('/misheard', misheard);

router.get('/instruments', instruments.all);
router.get('/instruments/:slug', instruments.instrument);
router.get('/instruments/:slug/:page.md', instruments.page);

router.get('/albums', albums.all)
router.get('/albums/:slug', albums.album);
router.get('/albums/:slug/:page.md', albums.page);

router.get('/songs', songs)

router.get('/playlists', lists)

router.get('/genres', genres)

router.get('/subcultures', subcultures)

export default router;
