var createError = require('http-errors');
var express = require('express');
var history = require('connect-history-api-fallback');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var cors = require('cors');

var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost:27017/rooms';

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use(history());

mongoose.connect(mongoUri,{ useNewUrlParser: true })
  .then(() => console.log("mongoDB connected!"))
  .catch(e => console.error(e));

  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
