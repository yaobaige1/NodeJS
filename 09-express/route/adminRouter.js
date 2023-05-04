const express = require('express')
// 创建路由对象
const router = express.Router()

router.get('/admin',(req,res)=>{
    res.send("欢迎来到home2")
})
// 进到所有请求的"/home" 时执行
router.all('/setting',(req,res)=>{
    res.send("我是get请求，post请求都能访问")
})

module.exports = router