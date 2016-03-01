var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport= require('passport');

module.exports = function(app, config){
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(logger(config.logger));
    app.set('views', config.rootPath+"/server/views");
    app.set('view engine', 'jade');
    app.use(cookieParser());
    app.set('trust proxy', 1) // trust first proxy
    app.use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true }
    }));
    
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath+'/public'));

}