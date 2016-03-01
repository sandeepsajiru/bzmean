var express = require('express');
var mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// Load Configurations based on environment
var config = require('./server/config/config')[env];

// Configure Express App
require('./server/config/express')(app, config);

// Connect to DB
require('./server/config/mongoose')(config);

var User = mongoose.model('User');
passport.use(new LocalStrategy(
    function(userName, password, done){
        User.findOne({userName:userName}).exec(function(err, user){
          if(user && user.authenticate(password))
              return done(null, user);
            else
                return done(null, false);
        })
    }
));

passport.serializeUser(function(user, done){
   if(user)
       done(null, user._id);
});

passport.deserializeUser(function(id, done){
    User.findOne({_id:id}).exec(function(err, user){
        if(user)
            return done(null, user);
        else
            return done(null, false);
    })
        
})

// Express Routes
require('./server/config/routes')(app);


// Start Server
app.listen(config.port, function () {
  console.log('Example app listening on port http://localhost:'+config.port);
});