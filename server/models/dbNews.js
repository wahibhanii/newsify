'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  source      : Schema.Types.Mixed,
  author      : String,
  title       : String,
  description : String,
  url         : String,
  urlToImage  : String,
  publishedAt : Date
});


const News = mongoose.model('News', newsSchema);

module.exports = News;