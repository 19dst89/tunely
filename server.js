

// require express and other modules
var express = require('express');
var app = express();

var db = require('./models');

//import controllers
var controllers = require('./controllers');

// use public folder
app.use(express.static('public'));



//render index html page
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//get controllers index
app.get('/api', controllers.api.index);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});