const express = require('express')
// 创建路由对象
const router = express.Router()

// 前台路由
router.get('/',(req,res)=>{
    res.send("hello word");
})
router.get('/home',(req,res)=>{
    res.send("欢迎来到home1")
})

module.exports = router