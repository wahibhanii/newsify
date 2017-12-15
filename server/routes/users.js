const express = require('express');
const router  = express.Router();
const UserController   = require('../controllers/dbUsersController')

// ----- Find user by facebook ID, if not found, create new user data on database
router.get('/', UserController.findUserByFbId)

// router.post('/', UserController.addUser) >>>>>>>>> TO BE DEPRECATED <<<<<<<<<<<<

// ----- Delete user from database, for development purpose only
router.delete('/:id', UserController.deleteUser)

// ----- Add news to user's reading list
router.post('/addnews', UserController.addUserNews)

// ----- Remove news to user's reading list
router.post('/removenews', UserController.removeUserNews)

module.exports = router;
