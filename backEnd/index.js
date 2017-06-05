var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static('views'));
var path = require('path');
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res) {
  // res.send('Hello World!');
});

app.get('/signup', function (req, res) {
  // res.send("functiona");
});

// app.get('/signup', function (req, res) {
//   res.send("functiona");
// });


app.post('/signup', function (req, res) {
  // save user details to your database.
  var details = req.body;
  var firstname = req.body.firstname;
  console.log(details);
  res.send("Hi " + firstname + "!");
});


app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});

