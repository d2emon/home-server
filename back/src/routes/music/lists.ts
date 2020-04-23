import express from 'express';

export default (req: express.Request, res: express.Response) => res.json({
    title: 'Списки',
    lists: [
        '100 лучших рок-альбомов',
    ],
});
