// 登入express模块
const express = require('express')

// 创建应用对象
const app = express();

// 创建路由

//页面第一进来的页面是"/"  且是get请求时 执行
app.get('/',(req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end("hello word");
})
// 进到GET请求的"/home1"时 执行
app.get('/home1',(req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end("欢迎来到home1")
})
// 进到post请求的"/home2"时执行
app.post('/home2',(req,res)=>{
    res.end("欢迎来到home2")
})
// 进到所有请求的"/home" 时执行
app.all('/home3',(req,res)=>{
    res.end("我是get请求，post请求都能访问")
})
// 未找到路径时执行 或者 请求和路径不匹配 时执行
app.all('*',(req,res)=>{
    res.end("我是当未找到该路径就执行")
})

app.listen(9000,()=>{
    console.log("服务器");
})