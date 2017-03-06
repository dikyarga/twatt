var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: process.env.TWITTER_REQUEST_TOKEN,
    consumer_secret: process.env.TWITTER_ACCESS_TOKEN,
    access_token_key: process.env.TWITTER_USER_TOKEN,
    access_token_secret: process.env.TWITTER_USER_SECRET
});

module.exports = {
    tweet: function(req, res, next) {
        client.post('statuses/update', {
            status: 'I Love #NodeJS'
        }, function(error, tweet, response) {
          console.log(error);
            if (error) throw error;
            console.log(tweet); // Tweet body.
            res.send(tweet)
            console.log(response); // Raw response object.
        });
    }
}
