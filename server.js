var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// DB Connection
var dbName = "bzmean";
var mongoConnString = "mongodb://localhost/"+dbName;
mongoose.connect(mongoConnString);
var dbCon = mongoose.connection;
dbCon.on('error', function(err){
   console.log('failed to connect to db, make sure it is running '+err);
});
dbCon.once('open', function callback(){
   console.log('Mongodb connected');
});

// DB Read

var msgSchema = mongoose.Schema({msg : String});
var msgModel = mongoose.model('Message', msgSchema);

var dbMessage='';
msgModel.findOne().exec(function(err, msgDocument){
    
   if(err)
       console.log('Error Reading the Message from DB');
    else{
        if(msgDocument==null){
            var msg = new msgModel({'msg':'This is a DB message'});
            msg.save();
            console.log('First time DB Connection, Saved the message.  Will be loaded next time');
        }
        else{
            console.log('Read Message: '+msgDocument.msg);
            dbMessage = msgDocument.msg;
        }
    }
});


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.set('views', __dirname+"/server/views");
app.set('view engine', 'jade');
app.use(express.static(__dirname+'/public'));


app.get('/partials/:pp', function(req, res){
    res.render('partials/'+req.params.pp);
});
app.get('/', function (req, res) {
  res.render('index', {pageTitle : 'Being Zero', dbMessage : dbMessage});
});

var port=3000;
app.listen(port, function () {
  console.log('Example app listening on port http://localhost:'+port);
});