var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));
app.listen(port, function() {
  console.log("Node listening on port " + port);
});
//index
app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});

// routes



// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "Went to the zoo the other day. It only had one dog in it.",
    punchLine: "It was shih tzu."
  }
];
app.get('/jokes', function(req, res){
    res.send(jokes);
    
});//end of get jokes0

app.get('/jokes1', function(req, res){
  res.send(jokes[1]);
});//end of get jokes1
//
app.get('/jokes2', function(req, res){
  res.send(jokes[2]);
});//end of get jokes2
//
