var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/web/index');
var accountRouter = require('./routes/api/index');
var authRouter = require('./routes/web/auth')
const session = require('express-session');
const MongStore = require("connect-mongo");
const { DBHOST, DBPORT, DBNAME } = require('./config/config')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
  name: 'sid', //设置cookie的name 默认值的 connect.sid
  secret: 'atguigu', //参与加密的字符串 （又称签名）
  saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
  resave: true, //是否在每次请求时重新保存 session
  store: MongStore.create({
    mongoUrl: `mongodb://${DBHOST}:${DBPORT}/${DBNAME}` //数据库的连接配置
  }),
  cookie: {
    httpOnly: true, //开启后前端无法通过js操作 只能访问
    maxAge: 1000 * 60 * 60 * 60  //这是一条控制seeionID 的过期时间
  }
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', accountRouter);
app.use('/', authRouter)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  // next(createError(404));
  res.render('404')
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
