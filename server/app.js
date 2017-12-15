const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var cors = require('cors')
require('dotenv').config()


const dummy = require('./routes/dummy')
const mongoose = require('mongoose');
mongoose.connect(`mongodb://wahibhacktiv8:${process.env.DB_PASSWORD}@wahib-hacktiv8-shard-00-00-uyl7c.mongodb.net:27017,wahib-hacktiv8-shard-00-01-uyl7c.mongodb.net:27017,wahib-hacktiv8-shard-00-02-uyl7c.mongodb.net:27017/newsifiy?ssl=true&replicaSet=wahib-hacktiv8-shard-0&authSource=admin`,{ useMongoClient: true });


const index = require('./routes/index');
const users = require('./routes/users');
const news = require('./routes/news');

// mongoose.Promise = global.Promise

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/users', users);

app.use('/dummy', dummy)

app.use('/api/news', news)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
