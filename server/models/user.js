'use strict'
console.log(process.env.DB_PASSWORD)
const mongoose = require('mongoose');
mongoose.connect(`mongodb://wahibhacktiv8:${process.env.DB_PASSWORD}@wahib-hacktiv8-shard-00-00-uyl7c.mongodb.net:27017,wahib-hacktiv8-shard-00-01-uyl7c.mongodb.net:27017,wahib-hacktiv8-shard-00-02-uyl7c.mongodb.net:27017/gimana?ssl=true&replicaSet=wahib-hacktiv8-shard-0&authSource=admin`);
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const userSchema = new Schema({
  fbId  : String,
  fbName: String,
  news  : [{ type: Schema.Types.ObjectId, ref: 'News' }]
});

const User = mongoose.model('Users', userSchema);

module.exports = User;