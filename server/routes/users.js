const express = require('express');
const router  = express.Router();
const UserController   = require('../controllers/userController')

/* GET users listing. */
router.get('/:id', UserController.findUserByFbId)
router.post('/', UserController.addUser)
router.delete('/:id', UserController.deleteUser)

module.exports = router;
