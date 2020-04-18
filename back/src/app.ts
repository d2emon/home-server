import express from 'express'
import path from 'path'
// import favicon from 'static-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
// import lessMiddleware from 'less-middleware'
import log from 'winston'
// import mongoose from 'mongoose'

import HttpException from './exceptions';
import config from './config'
import menu from './menu'

import routes from './routes'
import routesMusic from './routes/music'
import routesUsers from './routes/users'
import routesGames from './routes/games'
import routesRock from './routes/rock'

log.configure({
    transports: [
        new log.transports.Console({ level: config.get('LOG_LEVEL') })
    ],
})

const publicPath = path.join(__dirname, '..', 'public');
log.debug(`Config: ${JSON.stringify(config)}`);
log.debug(`Path: ${publicPath}`);

const app =express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
// app.use(lessMiddleware({ src: publicPath }));
app.use(express.static(publicPath));

app.locals.siteName = config.get('siteName');
app.locals.siteDescription = config.get('siteDescription');
app.locals.companyName = config.get('companyName');
app.locals.companyEmail = config.get('companyEmail');
app.locals.companyAdress = config.get('companyAddress');
app.locals.menu = menu;

log.debug(JSON.stringify(menu));

app.use('/', routes);
app.use('/users', routesUsers);
app.use('/music', routesMusic);
app.use('/games', routesGames);
app.use('/rock', routesRock);

/// catch 404 and forwarding to error handler
app.use((req: express.Request, res: any, next: express.NextFunction) => {
    res
        .status(404)
        .send('Not Found');
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: HttpException, req: express.Request, res: express.Response) => {
        res
            .status(err.status || 500)
            .render('error', {
                message: err.message,
                error: err
            });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err: HttpException, req: express.Request, res: express.Response) => {
    res
        .status(err.status || 500)
        .render('error', {
            message: err.message,
            error: {}
        });
});

export default app;
