var express = require('express');
var mongoose = require('mongoose');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// Load Configurations based on environment
var config = require('./server/config/config')[env];

// Configure Express App
require('./server/config/express')(app, config);

// Connect to DB
require('./server/config/mongoose')(config);

// Express Routes
require('./server/config/routes')(app);


// Start Server
app.listen(config.port, function () {
  console.log('Example app listening on port http://localhost:'+config.port);
});