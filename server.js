var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port=3000;
app.listen(port, function () {
  console.log('Example app listening on port http://localhost:'+port);
});