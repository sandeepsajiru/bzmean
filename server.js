var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.set('views', __dirname+"/server/views");
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

var port=3000;
app.listen(port, function () {
  console.log('Example app listening on port http://localhost:'+port);
});