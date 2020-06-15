import express from 'express';
import {onError} from '../../helpers/errors';
import SongModel from '../../models/song';

export default {
    all: (req: express.Request, res: express.Response) => SongModel
        .all()
        .then((albums) => res.json({ albums }))
        .catch(onError),
    song: (req: express.Request, res: express.Response) => SongModel
        .item(req.params.slug)
        .then((song) => res.json({ song }))
        .catch(onError),
    page: (req: express.Request, res: express.Response) => SongModel
        .page(req.params.slug, req.params.page)
        .then((page) => res.send(page))
        .catch(onError),
}
