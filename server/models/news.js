'use strict'
const mongoose = require('mongoose');
mongoose.connect(`mongodb://wahibhacktiv8:${process.env.DB_PASSWORD}@wahib-hacktiv8-shard-00-00-uyl7c.mongodb.net:27017,wahib-hacktiv8-shard-00-01-uyl7c.mongodb.net:27017,wahib-hacktiv8-shard-00-02-uyl7c.mongodb.net:27017/test?ssl=true&replicaSet=wahib-hacktiv8-shard-0&authSource=admin`);
const Schema = mongoose.Schema;

const userSchema = new Schema({
  data: Schema.Types.Mixed
});

const User = mongoose.model('Users', userSchema);

module.exports = User;