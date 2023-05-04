//导入express
const express = require('express')
//创建应用对象
const app = express()
// 静态资源中间件设置  主页是显示默认会显示 静态资源中间件里面public里面的index.html文件 
// 如果路由有 '/'  会按 静态资源中间件 和 路由的顺序来指定显示 靠前的显示
app.use(express.static(__dirname + '/public'))
// 创建路由
app.get('/',(req,res)=>{
    res.send("来了")
})
// 监听端口 启动服务
app.listen(9000,()=>{
    console.log("服务器启动");
})