const http = require('http')
// 创建服务对象
const server = http.createServer((request,response)=>{
    let body = '';
    // 绑定data事件  request触发时
    request.on('data', chunk =>{
        body += chunk;
    })
    // 绑定end事件  request触发完成后
    request.on('end', ()=>{
        console.log(body);
        // 接受到request 后 响应后
        response.end('Hello Http')
    })
})
// 监听服务端口，启动服务
server.listen(9000,()=>{
    console.log("9000服务启动成功");
})