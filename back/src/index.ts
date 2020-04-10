import Debug from 'debug';
import app from './app';

const debug = Debug('home-server');

const port = process.env.PORT || 3000;

app.set('port', port);
app.listen(
    app.get('port'),
    () => debug(`Express server listening on port ${port}`),
);
