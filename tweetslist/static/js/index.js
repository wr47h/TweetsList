var Twitter = require('twitter');

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
