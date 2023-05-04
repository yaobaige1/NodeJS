const express = require('express')
const app = express()
app.get('/other',(req,res)=>{
    
    // 跳转响应
    // res.redirect('http://4399.com')
    
    // 下载响应
    res.download(__dirname + '/singers.json')

    // JSON响应
    // res.json({
    //     name:"张三",
    //     age:22
    // })

    // 响应文件内容
    // res.sendFile(__dirname + '/test.html')
})
app.listen(9000,()=>{
    console.log("服务器启动");
})