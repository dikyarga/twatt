let base64 = require('base-64');
const crypto = require('crypto');

// call the models
let db = require('../models')

// sign with default (HMAC SHA256)
var jwt = require('jsonwebtoken');
var OAuth = require('oauth');
var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.TWITTER_REQUEST_TOKEN,
    process.env.TWITTER_ACCESS_TOKEN,
  '1.0A',
  null,
  'HMAC-SHA1')


module.exports = {
  getNews: function(req, result, next){
    console.log('ini process .env : ', process.env.TWITTER_USER_TOKEN);
    let keyword = req.query.keyword
    oauth.get(
      'https://api.twitter.com/1.1/search/tweets.json?q=%40' + keyword,
      process.env.TWITTER_USER_TOKEN, //test user token
      process.env.TWITTER_USER_SECRET, //test user secret
      function (e, data, res){
        if (e) console.error(e);
        result.send(data)
        console.log('--------------------', data);
        console.log(require('util').inspect(data));
      });
  }
}
