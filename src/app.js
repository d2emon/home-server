var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('config');
var log = require('winston');
var mongoose = require('mongoose');

log.info(config.get('port'));

var routes = require('./routes/index');
var users = require('./routes/users');
var rock = require('./routes/rock');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

var publicPath = path.join(__dirname, '..', 'public');
log.info(publicPath);
app.use(require('less-middleware')({ src: publicPath }));
app.use(express.static(publicPath));

app.locals.siteName = "Home Server";
app.locals.siteDescription = " This is my home server";
app.locals.companyName = "Dmitry Kutsenko";
app.locals.companyEmail = "d2emonium@gmail.com";
app.locals.companyAdress = [
  "30, ул. Бетховена",
  "г. Луганск, ЛНР"
];

app.use('/', routes);
app.use('/users', users);
app.use('/rock', rock);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
