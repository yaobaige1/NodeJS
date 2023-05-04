// 登入express模块
const express = require('express')
const fs = require('fs')
const path = require('path')
const homeRouter = require('./route/homeRouter')
const adminRouter = require('./route/adminRouter')

// 创建应用对象
const app = express();

// 使用前台路由设置
app.use(homeRouter)
app.use(adminRouter)

// 用来记录每个请求url与ip地址
// 声明中间件函数
function recordMiddleware(req,res,next) {
    // 从req中解构赋值出 url 和 ip
    let {url,ip} = req
    // 将信息追加保存在文件夹 /access.log 中
    fs.appendFileSync(path.resolve(__dirname + '/access.log'),`${url} ${ip}\r\n`);
    // 调用next
    next();
}
//app.use 是专门解析中间件函数的方法，使用之后express会将http请求响应对象交给中间件函数
//中间件函数处理完跳过next()方法传递给下一个中间件函数，直到返回响应数据
app.use(recordMiddleware)
// 创建路由

// 进到所有请求的"/home" 时执行
app.all('*',(req,res)=>{
    res.send("<h1>404 Not Found</h1>")
})


app.listen(9000,()=>{
    console.log("服务器");
})