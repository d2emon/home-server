import express from 'express';

export default (req: express.Request, res: express.Response) => res.json({
    title: 'Песенник',
    description: 'Мой сборник аккордов',
    songs: [
    ],
});
