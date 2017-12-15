const User            = require('../models/user')
const ObjectId        = require('mongodb').ObjectId;
const NewsController  = require('../controllers/newsController')


class UserController {
  static findUserByFbId(req, res, next){
    User.findOne({fbId: req.params.id}).populate('news')
    .then( dataUser => {
      if (dataUser === null){
        let newUser = {
          fbId      : req.headers.fbid,
          fbName    : req.headers.fbname,
          news      : []
        }
        console.log(newUser,'<< ini newUser')
        User.create(newUser)
        .then(result => {
          res.status(200).json({
            message: 'Not Found, new User entry has been created.',
            data: result})
        })
        .catch(err => {
          res.status(500).send(err)
        })
      } else {
        res.status(200).json({
          message: 'User Found...!',
          data: dataUser})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  // static addUser(req, res, next){
  //   let newUser = {
  //     fbId      : req.body.fbId,
  //     fbName    : req.body.fbName,
  //     news      : req.body.news,
  //   }
  //   User.create(newUser)
  //   .then(result => {
  //     res.status(200).json(result)
  //   })
  //   .catch(err => {
  //     res.status(500).send(err)
  //   })
  // } >>>>>>>>>>>>> TO BE DEPRECATED <<<<<<<<<<<<<<<<<<

  static addUserNews(req, res, next){
    //findorcreate news
    //.then push newsId to User.news
    let newsId
    let userId = req.headers.userid
    let newsObj = {
      source      : JSON.parse(req.body.source),
      author      : req.body.author,
      title       : req.body.title,
      description : req.body.description,
      url         : req.body.url,
      urlToImage  : req.body.urlToImage,
      publishedAt : Date(req.body.publishedAt)
    }
    NewsController.findOrCreateNews(newsObj)
    .then(newsResult => {
      console.log('------------>> ',userId)
      newsId = newsResult._id
      User.findOne({_id: userId})
      .then(dataUser => {
        // res.send(dataUser)
        console.log('++++++++++',dataUser)
        let newNews = dataUser.news
        if (newNews.indexOf(newsId) === -1){
          console.log('no news entry found, adding news...')
          newNews.push(newsId)
          let newUserData = {
            fbId    : dataUser.fbId,
            fbName  : dataUser.fbName,
            news    : newNews
          }
          console.log(newsId,'=======', newUserData.news)
          // res.send(newUserData)
          User.update({_id: userId}, newUserData)
          .then(result => {
            res.status(200).json({
              message: 'add news successful',
              data: result
            })
          })
          .catch(err => {
            res.status(500).send(err)
          })
        } else {
          res.status(200).json({
            message: 'This News is already in the reading list',
            data: dataUser
          })
        }
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(err)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }

  static deleteUserNews(){



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

