const express = require('express')

const bodyParser = require('body-parser')

const app = express()

// 解析json格式的请求体的中间件
var jsonParser = bodyParser.json()

// 解析 querystring 格式请求体的中间件
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/test.html')
    console.log(req.query);
})

// 当是post请求时,会通过urlencodedParser解析 获取提交的数据
app.post('/login',urlencodedParser,(req,res)=>{
    // 获取用户名和密码
    console.log(req.body);
})

app.listen(9000,()=>{
    console.log("服务器启动");
})