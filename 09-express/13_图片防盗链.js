const express = require('express')
const app = express()

app.use((req,res,next)=>{
    // referer 只有是从 一个 链接 获取过来的才有   比如 html中的 url 链接 
    //根据Referer的定义，它的作用是指示一个请求是从哪里链接过来，
    // 那么当一个请求并不是由链接触发产生的，那么自然也就不需要指定这个请求的链接来源。

    //比如，直接在浏览器的地址栏中输入一个资源的URL地址，那么这种请求是不会包含 Referer  字段的，
    // 因为这是一个“凭空产生”的 HTTP  请求，并不是从一个地方链接过去的。


    // 检测请求体中的referer是否为 127.0.0.1
    // 获取 referer
    let referer = req.get('referer');
    if(referer) {
        // 实例化
        let url = new URL(referer)
        // 获取 hostname
        let hostname = url.hostname;
        // 判断
        if(hostname != '127.0.0.1'){
            // 响应404
            res.status(404).send('<h1>404 Not Found</h1>')
            return
        }
    } 
    next()
})
app.use(express.static(__dirname + '/public'))

app.listen(9000,()=>{
    console.log("服务器启动");
})