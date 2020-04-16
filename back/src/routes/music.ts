import express from 'express';

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
            'title': 'Каверы',
            'link': '/api/music/covers',
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

router.get('/misheard', (req: express.Request, res: express.Response) => res.json({}))
router.get('/instruments', (req: express.Request, res: express.Response) => res.json({}))
router.get('/covers', (req: express.Request, res: express.Response) => res.json({}))
router.get('/songs', (req: express.Request, res: express.Response) => res.json({}))
router.get('/playlists', (req: express.Request, res: express.Response) => res.json({}))
router.get('/genres', (req: express.Request, res: express.Response) => res.json({}))
router.get('/subcultures', (req: express.Request, res: express.Response) => res.json({}))

export default router;
