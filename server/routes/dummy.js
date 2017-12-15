var express = require('express');
var router = express.Router();
const FB = require('fb')
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.headers.fbid, req.headers.fbname, req.headers.token);
});

router.post('/', function(req, res, next) {
  console.log(req.headers.token);
  FB.setAccessToken(req.headers.token);

  var body = 'https://www.google.com';
  FB.api('me/feed', 'post', { message: body }, function (res) {
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    console.log('Post Id: ' + res.id);
  });
});

module.exports = router;
