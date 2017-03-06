var express = require('express');
var router = express.Router();

let twitterController = require('../../../controllers/api/v2/twitterController')

router.post('/tweet', twitterController.tweet)

module.exports = router;
