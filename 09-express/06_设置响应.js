// 登入express模块
const express = require('express')

// 创建应用对象
const app = express();

// 创建路由

//页面第一进来的页面是"/"  且是get请求时 执行
app.get('/request',(req,res)=>{
    // 原生响应
    // res.statusCode = 404
    // res.statusMessage='love'
    // res.setHeader('xxx','yyy')
    // res.write('hello')
    // res.end("hello word");

    // express
    // 响应状态码
    res.status(500);
    // 响应头
    res.set('aaa','bbb')
    //响应体
    res.send('你好')
    // 链式
    res.status(500).set('abc','def').send('这也行')
})


app.listen(9000,()=>{
    console.log("服务器");
})