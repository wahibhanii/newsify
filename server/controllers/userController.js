const User = require('../models/user')
const ObjectId = require('mongodb').ObjectId;

class UserController {

  static findUserByFbId(req, res, next){
    User.findOne({fbId: req.params.id})
    .then( dataUser => {
      res.status(200).json(dataUser)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static addUser(req, res, next){
    let newUser = {
      fbId      : req.body.fbId,
      fbName    : req.body.fbName,
      news      : req.body.news,
    }
    User.create(newUser)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  

  static deleteUser(req, res, next){  
    User.deleteOne({_id : ObjectId(req.params.id)})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }


}
module.exports = UserController

// get news + sort?
// Search news
// add
// delete

