const express = require('express');
const router  = express.Router();
const UserController   = require('../controllers/userController')
const NewsController   = require('../controllers/newsController')
/* GET users listing. */
router.get('/:id', UserController.findUserByFbId)

// router.post('/', UserController.addUser) >>>>>>>>> TO BE DEPRECATED <<<<<<<<<<<<

router.delete('/:id', UserController.deleteUser)

router.post('/addnews', UserController.addUserNews)


router.post('/news', (req, res)=>{
  NewsController.findOrCreateNews(req.body)
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router;
