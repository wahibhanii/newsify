const News = require('../models/dbNews')
const ObjectId = require('mongodb').ObjectId;

class NewsController {

    static findOrCreateNews(newsObj){
      return new Promise ((resolve, reject) => {
        News.findOne({url: newsObj.url})
        .then( dataNews => {
          if ( dataNews === null){
            console.log('ini data News-------->', newsObj)
            let newNews = {
              source      : newsObj.source,
              author      : newsObj.author,
              title       : newsObj.title,
              description : newsObj.description,
              url         : newsObj.url,
              urlToImage  : newsObj.urlToImage,
              publishedAt : Date(newsObj.publishedAt)
            }
            News.create(newNews)
            .then(result => {
              console.log('Not Found, new News entry has been created...')
              resolve(result)
            })
          } else {
            console.log('News found...')
            resolve(dataNews)
          }
        })
        .catch(err => {
          console.log(err)
          reject(err)
        })
      })
    }
  
    static deleteNews(req, res, next){  
      News.deleteOne({_id : ObjectId(req.params.id)})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).send(err)
      })
    }
  
  
  }
  module.exports = NewsController
  