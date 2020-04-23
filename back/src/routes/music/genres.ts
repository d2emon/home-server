import express from 'express';
import {onError} from '../../helpers/errors';
import GenreModel from '../../models/genre';

export default {
    all: (req: express.Request, res: express.Response) => GenreModel
        .all()
        .then((albums) => res.json({ albums }))
        .catch(onError),
    genre: (req: express.Request, res: express.Response) => GenreModel
        .item(req.params.slug)
        .then((genre) => res.json({ genre }))
        .catch(onError),
    page: (req: express.Request, res: express.Response) => GenreModel
        .page(req.params.slug, req.params.page)
        .then((page) => res.send(page))
        .catch(onError),
}
