var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(express.static('views'));

app.get('/signup', function (req, res) {
  res.sendfile(signup.html, {root: './'});
});

app.post('/signup', function (req, res) {
  // save user details to your database.
  res.send('Signed Up!');
});


app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});

