var Twitter = require('twitter');

console.log('Hi');

var client = new Twitter({
    consumer_key: 'jppcL0dmJzetnxWnJ2qzC9XBY',
    consumer_secret: 'J18xb0tFBeDB3Y7t85EUiwMG6SA1aQ1tZYVWTZPtQAjhd0ug3v',
    access_token_key: '2566732320-atuNJIElBZqCRMat8WszZgPiqLn20iRaHw5DibY',
    access_token_secret: 'mUWRAWXiUFUUr2KzWQKIuAcFjASbQDiImrIWrQSZtGYJA'
});

client.get('search/tweets', {q: 'trump'}, function(error, tweets, response) {
    console.log(tweets);
});
