var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.set('views', __dirname+"/server/views");
app.set('view engine', 'jade');
app.use(express.static(__dirname+'/public'));


app.get('/partials:pp', function(req, res){
    res.render('partials/'+req.params.pp);
    console.log('partial requested partials/'+req.params.pp)
});
app.get('/', function (req, res) {
  res.render('index', {pageTitle : 'Being Zero'});
});

var port=3000;
app.listen(port, function () {
  console.log('Example app listening on port http://localhost:'+port);
});