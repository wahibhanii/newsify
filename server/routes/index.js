var express = require('express');
var router = express.Router();
const FB = require('fb')
/* GET home page. */
router.post('/', (req, res) => {
  FB.api('me', {
     fields: ['id', 'name', 'email'],
     access_token: `${req.body.accessToken}`},
   function (respond) {
       console.log(respond);
       res.status(200).json({data: respond})
     }
   )
});

module.exports = router;
