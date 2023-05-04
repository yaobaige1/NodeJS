const express = require('express')
const session = require('express-session');
const MongStore = require("connect-mongo");
const app = express()
// 设置session中间件
app.use(session({
    name: 'sid', //设置cookie的name 默认值的 connect.sid
    secret: 'atguigu', //参与加密的字符串 （又称签名）
    saveUninitialized: false, //是否为每次请求都设置一个cookie用来存储session的id
    resave: true, //是否在每次请求时重新保存 session
    store: MongStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/bilibili' //数据库的连接配置
    }),
    cookie: {
        httpOnly: true, //开启后前端无法通过js操作 只能访问
        maxAge: 1000 * 60 * 5  //这是一条控制seeionID 的过期时间
    }
}))
app.get('/register',(req,res)=>{
    req.session.username = req.query.username
    req.session.password = req.query.password
    if(req.session.username &&  req.session.password) {
        res.send(`注册成功，你的账号是${req.session.username},密码是${req.session.password},请记住`)
    } else {
        res.send("注册失败")
    }
})
app.get('/login', (req, res) => {
    if (req.query.username === req.session.username && req.query.password == req.session.password) {
        // req.session.username = 'aaa'
        // req.session.uid = '258aefccc'
        res.send("登入成功")
    } else {
        res.send("登入失败")
    }
})

app.get('/cart', (req, res) => {
    if (req.session.username) {
        res.send(`购物车页面，欢迎你${req.session.username}`)
    } else {
        res.send("你还没登入")
    }
})

app.listen(9000, () => {
    console.log("服务器启动");
})