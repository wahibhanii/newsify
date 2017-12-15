'use strict'
const mongoose = require('mongoose');
mongoose.connect(`mongodb://wahibhacktiv8:${process.env.DB_PASSWORD}@wahib-hacktiv8-shard-00-00-uyl7c.mongodb.net:27017,wahib-hacktiv8-shard-00-01-uyl7c.mongodb.net:27017,wahib-hacktiv8-shard-00-02-uyl7c.mongodb.net:27017/newsifiy?ssl=true&replicaSet=wahib-hacktiv8-shard-0&authSource=admin`,{ useMongoClient: true });
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