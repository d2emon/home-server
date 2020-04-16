import express from 'express';
import Misheard from '../models/misheard';
import Instrument from '../models/instrument';
import { InstrumentInterface } from '../types';

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

router.get('/misheard', (req: express.Request, res: express.Response) => Misheard
    .all()
    .then((misheard: string[]) => res.json({ misheard }))
    .catch((error) => {
        // tslint:disable-next-line
        console.error(error);
        res.json({ error });
    }));

router.get('/instruments', (req: express.Request, res: express.Response) => Instrument
    .all()
    .then((instruments: InstrumentInterface[]) => res.json({ instruments }))
    .catch((error) => { throw new Error(error); }));

router.get('/instruments/:slug', (req: express.Request, res: express.Response) => Instrument
    .get(req.params.slug)
    .then((instrument: InstrumentInterface) => res.json({ instrument }))
    .catch((error) => { throw new Error(error); }));

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
