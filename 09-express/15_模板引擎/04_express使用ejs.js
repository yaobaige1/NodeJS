const express = require('express')
const path = require('path')
const app = express()
// 设置 ejs 的模板引擎    view engine  视图引擎的意思
app.set('view engine','ejs')
//设置模板文件存放位置  模板文件：具有模板语法内容的文件 
app.set('views',path.resolve(__dirname + '/views'))
app.get('/home',(req,res)=>{
    let title = "吃饭了没"
    res.render('home',{title})
})
app.listen(9000,()=>{
    console.log("服务器启动");
})