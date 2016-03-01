var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, config){
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(logger(config.logger));
    app.set('views', config.rootPath+"/server/views");
    app.set('view engine', 'jade');
    app.use(express.static(config.rootPath+'/public'));

}