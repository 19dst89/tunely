

// require express and other modules
var express = require('express');
var app = express();

// use public folder
app.use(express.static('public'));



//render index html page

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});