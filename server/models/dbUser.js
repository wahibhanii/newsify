'use strict'
// console.log(process.env.DB_PASSWORD)
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const userSchema = new Schema({
  fbId  : String,
  fbName: String,
  news  : [{ type: Schema.Types.ObjectId, ref: 'News' }]
});

const User = mongoose.model('Users', userSchema);

module.exports = User;