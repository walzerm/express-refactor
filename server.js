var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname );
app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/song/edit', function(req, res) {
  res.render('edit');
});

app.get('/song/1', function(req, res) {
  res.render('song', {
    pageInfo: 'This is the song that never ends',
    nextPage: '1/2'
  });
});

app.get('/song/1/2', function(req, res) {
  res.render('song', {
    pageInfo: 'Yea some people started it not knowing what it was',
    nextPage: '2/3'
  });
});

app.get('/song/1/2/3', function(req, res) {
  res.render('song', {
    pageInfo: 'And they\'ll continue singing it because',
    nextPage: '/song/1'
  });
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});
