const express = require('express')

const app = express()

// 路由中间件 判断用户URL中是否携带 code=521 如果有便放行响应 否则 阻止
let recordMiddleware = (req,res,next)=>{
    if(req.query.code == '521') {
        next()
    } else {
        res.send("暗号错误")
    }
}

// 先找到home1 然后来到路由中间件 判断 如果成功通过 就执行req res的操作
app.get('/home1',recordMiddleware,(req,res)=>{
    res.send("欢迎来到home1")
})
app.get('/home2',recordMiddleware,(req,res)=>{
    res.send("欢迎来到home2")
})

app.listen(9000,()=>{
    console.log("服务器启动成功");
})
