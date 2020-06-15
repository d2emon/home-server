import express from 'express';
import {onError} from '../../helpers/errors';
import AlbumModel from '../../models/album';

export default {
    all: (req: express.Request, res: express.Response) => AlbumModel
        .all()
        .then((albums) => res.json({ albums }))
        .catch(onError),
    album: (req: express.Request, res: express.Response) => AlbumModel
        .item(req.params.slug)
        .then((album) => res.json({ album }))
        .catch(onError),
    page: (req: express.Request, res: express.Response) => AlbumModel
        .page(req.params.slug, req.params.page)
        .then((page) => res.send(page))
        .catch(onError),
}
