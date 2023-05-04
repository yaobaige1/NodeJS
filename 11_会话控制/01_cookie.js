const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())
//设置cookie
app.get('/set-cookie', (req, res) => {
    //cookie只在获取到 到 未关闭网页前有效  
    // res.cookie('name','zhangsan')
    res.cookie('name', 'zhangsan', { maxAge: 60 * 1000 })  //maxAge 最大年龄 存在的时间
    res.send('home')
})
// 删除cookie
app.get('/remove-cookie', (req, res) => {
    res.clearCookie('name')
    res.send("删除")
})
// 获取cookie
app.get('/get-cookie', (req, res) => {
    console.log(req.cookies);
    res.send(`我是cookie${req.cookies.name}`)
})
app.listen(9000, () => {
    console.log("服务器启动");
})