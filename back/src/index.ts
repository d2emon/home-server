import Debug from 'debug';
import config from './config';
import app from './app';

const debug = Debug(config.get('APP_NAME'));

const port = config.get('PORT');
app.set('port', port);
app.listen(
    app.get('port'),
    () => debug(`Express server listening on port ${port}`),
);
