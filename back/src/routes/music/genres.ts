import express from 'express';

export default (req: express.Request, res: express.Response) => res.json({
    title: 'Стили',
    genres: [
    ],
});
