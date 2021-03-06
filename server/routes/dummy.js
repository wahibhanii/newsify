var express = require('express');
var router = express.Router();
const FB = require('fb')
/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.headers.fbid, req.headers.fbname, req.headers.token);
});

router.post('/', function(req, res, next) {
  console.log('masuk routing share');
  console.log(req.headers);
  FB.setAccessToken(req.headers.token);


  let body = req.headers.linknews;
  let picUrl = req.headers.linkimage
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
