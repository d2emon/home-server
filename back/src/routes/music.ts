import express from 'express';
import MisheardModel from '../models/misheard';
import InstrumentModel from '../models/instrument';
import { Instrument, Misheard } from '../types';

const router = express.Router();

const onError = (error: Error) => {
    // // tslint:disable-next-line
    // console.error(error);
    // res.json({ error });
    throw error;
}

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

router.get('/misheard', (req: express.Request, res: express.Response) => MisheardModel
    .all()
    .then((misheard) => res.json({ misheard }))
    .catch(onError));

router.get('/instruments', (req: express.Request, res: express.Response) => InstrumentModel
    .all()
    .then((instruments) => res.json({ instruments }))
    .catch(onError));

router.get('/instruments/:slug', (req: express.Request, res: express.Response) => InstrumentModel
    .get(req.params.slug)
    .then((instrument) => res.json({ instrument }))
    .catch(onError));

router.get('/instruments/:slug/:page.md', (req: express.Request, res: express.Response) => InstrumentModel
    .page(req.params.slug, req.params.page)
    .then((page) => res.send(page))
    .catch(onError));

router.get('/covers', (req: express.Request, res: express.Response) => res.json({
    title: 'Каверы',
    description: 'Известные песни в неизвестном исполнении',
    covers: [
        'Неголубой огонек',
    ],
}))

router.get('/songs', (req: express.Request, res: express.Response) => res.json({
    title: 'Песенник',
    description: 'Мой сборник аккордов',
    songs: [
    ],
}))

router.get('/playlists', (req: express.Request, res: express.Response) => res.json({
    title: 'Списки',
    lists: [
        '100 лучших рок-альбомов',
    ],
}))

router.get('/genres', (req: express.Request, res: express.Response) => res.json({
    title: 'Стили',
    genres: [
    ],
}))

router.get('/subcultures', (req: express.Request, res: express.Response) => res.json({
    title: 'Субкультуры',
    subcultures: [
    ],
}))

export default router;
