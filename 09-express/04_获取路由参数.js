// 登入express模块
const express = require('express')

// 创建应用对象
const app = express();

// 创建路由

//页面第一进来的页面是"/"  且是get请求时 执行
app.get('/:id.html',(req,res)=>{
    console.log(req.params.id);
    res.end("hello word");
})


app.listen(9000,()=>{
    console.log("服务器");
})