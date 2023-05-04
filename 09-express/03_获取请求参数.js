// 登入express模块
const express = require('express')

// 创建应用对象
const app = express();

// 创建路由

//页面第一进来的页面是"/"  且是get请求时 执行
app.get('/request',(req,res)=>{
    // 原生操作

    // 获取请求方法
    console.log(req.method);
    // 获取请求路径
    console.log(req.url);
    //获取版本号
    console.log(req.httpVersion);
    //获取请求头
    console.log(req.headers);

    //express 操作

    // 获取请求路径
    console.log(req.path);
    //获取请求过来的参数
    console.log(req.query);
    //获取请求的ip
    console.log(req.ip);
    //获取请求头
    console.log(req.get('host'));
    res.end("hello word");
})


app.listen(9000,()=>{
    console.log("服务器");
})