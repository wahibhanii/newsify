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

  let body = 'http://www.mtv.com/news/3053026/finn-wolfhard-stranger-things-it-google-most-searched-2017/';
  let picUrl = 'https://imagesmtv-a.akamaihd.net/uri/mgid:ao:image:mtv.com:260093?height=729&width=1296&format=jpg&quality=.7'
  FB.api('me/feed', 'post', {
     link: body,
     picture: picUrl
   }, function (res) {
    if(!res || res.error) {
      console.log(!res ? 'error occurred' : res.error);
      return;
    }
    console.log('Post Id: ' + res.id);
  });
});

module.exports = router;
