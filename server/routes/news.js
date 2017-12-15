const express = require('express');
const router = express.Router();
const News = require('../controllers/newsController')

// GET ALL NEWS
router.get('/allNews', News.allNews)

// GET TOP NEWS WITH ENGLISH LANGUAGE
router.get('/topHeadlines', News.topHeadlines)

// GET TOP NEWS WITH SOURCES
router.get('/topHeadlinesSources/:sources', News.topHeadlinesSources);

// GET TOP NEWS WITH CATEGORY
router.get('/topHeadlinesCategory/:category', News.topHeadlinesCategory)

// GET ALL SOURCES
router.get('/allSources', News.allSources)

// SEARCH FEATURES NEWS WITH KEYWORD
router.get('/searchNews/:search', News.searchNews)

module.exports = router;
