import express from 'express';
import InstrumentModel from '../../models/instrument';
import { onError } from '../../helpers/errors';

export default {
    all: (req: express.Request, res: express.Response) => InstrumentModel
        .all()
        .then((instruments) => res.json({ instruments }))
        .catch(onError),
    instrument: (req: express.Request, res: express.Response) => InstrumentModel
        .get(req.params.slug)
        .then((instrument) => res.json({ instrument }))
        .catch(onError),
    page: (req: express.Request, res: express.Response) => InstrumentModel
        .page(req.params.slug, req.params.page)
        .then((page) => res.send(page))
        .catch(onError),
}
