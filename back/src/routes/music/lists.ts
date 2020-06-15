import express from 'express';
import {onError} from '../../helpers/errors';
import PlaylistModel from '../../models/playlist';

export default {
    all: (req: express.Request, res: express.Response) => PlaylistModel
        .all()
        .then((albums) => res.json({ albums }))
        .catch(onError),
    list: (req: express.Request, res: express.Response) => PlaylistModel
        .item(req.params.slug)
        .then((list) => res.json({ list }))
        .catch(onError),
    page: (req: express.Request, res: express.Response) => PlaylistModel
        .page(req.params.slug, req.params.page)
        .then((page) => res.send(page))
        .catch(onError),
}
