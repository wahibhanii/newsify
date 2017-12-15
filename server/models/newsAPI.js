const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('79a71c497c694f999095f17d8a433bf5')

class News {
  constructor() {

  }

  static topHeadlines() {
    let promise = new Promise(function(resolve,reject) {
      newsapi.v2.topHeadlines({
        sources : 'bbc-news',
        language: 'en',
        page: 2
      }, function(error,data){
        if(!error) {
          resolve(data)
        } else {
          reject(error)
        }
      })
    })
    return promise
  }

  static topHeadlinesSources(params) {
    let promise = new Promise(function(resolve,reject) {
      newsapi.v2.topHeadlines({
        sources: `${params.sources}`
      }, function(error,data){
        if(!error) {
          resolve(data)
        } else {
          reject(error)
        }
      })
    })
    return promise
  }

  static topHeadlinesCategory(params) {
    let promise = new Promise(function(resolve,reject) {
      newsapi.v2.topHeadlines({
        category: `${params.category}`
      }, function(error,data){
        if(!error) {
          resolve(data)
        } else {
          reject(error)
        }
      })
    })
    return promise
  }

  static allSources() {
    let promise = new Promise(function(resolve,reject) {
      newsapi.v2.sources(function(error,data) {
        if(!error) {
          resolve(data)
        } else {
          reject(error)
        }
      })
    })
    return promise
  }

  static allNews() {
    let promise = new Promise(function(resolve,reject) {
      newsapi.v2.everything({
        sources : 'bbc-news',
        sortBy : 'popularity',
        page : 3
      }, function(error,data) {
        if(!error) {
          resolve(data)
        } else {
          reject(error)
        }
      })
    })
    return promise
  }

  static searchNews(params) {
    let promise = new Promise(function(resolve,reject) {
      newsapi.v2.everything({
        q : `${params.search}`,
        sources : 'bbc-news',
        language : 'en',
        sortBy : 'publishedAt',
        page : 3
      }, function(error, data) {
        if (!error) {
          resolve(data)
        } else {
          reject(error)
        }
      })
    })
    return promise
  }



}

module.exports = News;

//===========================


// Get Headline



// Search News
  // By Query
  // By Source
  // filter date
