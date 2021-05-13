var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ppRouter = require('./routes/pp.js')
var tosRouter = require('./routes/tos.js')
<<<<<<< HEAD
var disclaimerRouter = require('./routes/disclaimer.js')
var returnRouter = require('./routes/return.js')
=======
var arcRouter = require('./routes/arc.js')
>>>>>>> 4839f6b923836e5758a80ca4b8c3e085f28da5d4
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', ppRouter);
app.use('/', tosRouter);
<<<<<<< HEAD
app.use('/', disclaimerRouter);
app.use('/', returnRouter);
=======
app.use('/', arcRouter);
>>>>>>> 4839f6b923836e5758a80ca4b8c3e085f28da5d4
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
