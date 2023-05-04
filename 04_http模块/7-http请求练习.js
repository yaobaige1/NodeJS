// 导入http模块
const http = require('http');
// 创建http服务
const server = http.createServer((request,response)=>{
    // 从 new URL 中 解构出 pathname
    let {pathname} = new URL(request.url,'http://127.0.0.1:9000');
    // 从request中解构出method
    let {method} = request;
    // 设置请求行的编码格式
    response.setHeader('content-type','text/html;charset=utf-8');
    // 判断
    if(method == 'GET' && pathname == '/login') {
        response.end("登入页面")
    } else if(method == 'GET' && pathname == '/reg') {
        response.end('注册页面')
    } else {
        response.end('Not Found')
    }
})
// 监听服务器端口
server.listen(9000,()=>{
    console.log("服务器启动成功");
})