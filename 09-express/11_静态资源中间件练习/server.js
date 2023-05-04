const express = require('express')
const app = express()
app.use(express.static(__dirname + '/尚品汇'))
app.listen(9000,()=>{
    console.log("服务器启动成功");
})