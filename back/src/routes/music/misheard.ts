import express from 'express';
import MisheardModel from "../../models/misheard";
import { onError } from '../../helpers/errors';

export default (req: express.Request, res: express.Response) => MisheardModel
    .all()
    .then((misheard) => res.json({ misheard }))
    .catch(onError);
