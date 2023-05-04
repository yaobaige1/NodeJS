const http = require('http')

const server = http.createServer((request,response)=>{
    // 获取请求方法
    console.log(request.method);
    //获取请求的url
    console.log(request.url);
    //获取HTTP协议的版本号
    console.log(request.httpVersion);
    //获取HTTP的请求头
    console.log(request.headers.host);
    
    response.end('http')
})

server.listen(9000,()=>{
    console.log("9000服务已启动");
})
