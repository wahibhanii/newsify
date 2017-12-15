const Model = require('../models/newsAPI');

class News {
  constructor() {

  }

  static allNews(req,res) {
    Model.allNews()
    .then(newsData => {
      res.send(newsData)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static topHeadlines(req,res) {
    Model.topHeadlines()
    .then(newsData => {
      res.send(newsData)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static topHeadlinesSources(req,res) {
    Model.topHeadlinesSources(req.params)
    .then(newsData => {
      res.send(newsData)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static topHeadlinesCategory(req,res) {
    Model.topHeadlinesCategory(req.params)
    .then(newsData => {
      res.send(newsData)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static allSources(req,res) {
    Model.allSources()
    .then(newsData => {
      res.send(newsData)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static searchNews(req,res) {
    Model.searchNews(req.params)
    .then(newsData => {
      res.send(newsData)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = News;
