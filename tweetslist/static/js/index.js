var Twitter = require('twitter');

/*
const Twitter = require('../../server.js');
if(Twitter) {
 console.log("Got it");
 } else {
  console.log("Nope");
}

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    baseUrl: __dirname,
    nodeRequire: require
});

var Twitter = requirejs('twitter-node-client').Twitter;
*/
var config = {
    	"consumerKey": "consumerKey",
    	"consumerSecret": "consumerSecret",
    	"accessToken": "accessToken",
    	"accessTokenSecret": "accessTokenSecret",
    	"callBackUrl": "http://localhost"
	}
var twitter = new Twitter(config);
//Callback functions
	var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
	};
	var success = function (data) {
    	console.log('Data [%s]', data);
	};

twitter.getSearch({'q':'#haiku','count': 10}, error, success);
*/


console.log('Hi');

var client = new Twitter({
    consumer_key: 'consumer_key',
    consumer_secret: 'consumer_secret',
    access_token_key: 'access_token_key',
    access_token_secret: 'access_token_secret'
});

client.get('search/tweets', {q: 'trump'}, function(error, tweets, response) {
    console.log(tweets);
});
