var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql=require('mysql')

//配置路由
var index = require('./routes/index');
var news = require('./routes/news');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
    keys: ['aa', 'bb'],
    name: 'abc_id',
}));
app.use(express.static(path.join(__dirname, 'public')));

//配置cors中间件
app.use(cors({
    "origin": ["http://localhost:3000", "http://localhost:5000", "http://localhost:8080"], //允许所有前端域名
    "credentials": true, //允许携带凭证
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
    "allowedHeaders": ['Content-Type', 'Authorization'] //被允许的post方式的请求头
}));

//配置数据库
    let db = mysql.createConnection({
    host:'localhost',//默认主机名localhost
    user:'root',
    password:'root',
    port:3306,
    database:'along'//需要打开的库名
    });
//连接数据库
    db.connect();

//做响应
app.use('/', index);

let Sql="SELECT * FROM data";   //打开的表名
app.use('/home',require('./routes/news.js')(db));
// app.use('/state',require('./routes/state.js')(db));

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;