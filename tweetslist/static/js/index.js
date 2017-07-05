var Twitter = require('twitter');
var cors = require('cors');
var express = require('express');

var app = express();
var jsdom = require('jsdom').jsdom;
var document = jsdom('<html></html>', {});
var window = document.defaultView;
var $ = require('jquery')(window);
/*
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});.jsdom;
*/

// use it before all route definitions
app.use(cors({origin: 'http://127.0.0.1:8000'}));

console.log('Hi');

var client = new Twitter({
    consumer_key: 'jppcL0dmJzetnxWnJ2qzC9XBY',
    consumer_secret: 'J18xb0tFBeDB3Y7t85EUiwMG6SA1aQ1tZYVWTZPtQAjhd0ug3v',
    access_token_key: '2566732320-atuNJIElBZqCRMat8WszZgPiqLn20iRaHw5DibY',
    access_token_secret: 'mUWRAWXiUFUUr2KzWQKIuAcFjASbQDiImrIWrQSZtGYJA'
});

var tweets;

client.get('search/tweets', {q: 'trump'}, function(error, tweets, response) {
    if(error)
      throw error;
    tweets = (tweets.statuses[0].text);
    //var tweets = JSON.parse(tweets);
});

$(document).ready(function() {
  var twt = $('<p><b> ' + tweets + '</b></p><br/>');
  twt.hide().prependTo('#tweets').fadeIn(2000);
})

var port = 8000 || process.env.PORT
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
