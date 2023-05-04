const http = require('http')
const server = http.createServer((request,response) => {
    // 设置响应状态码
    response.statusCode = 203
    // 设置响应状态描述
    response.statusMessage = 'aaaaa'
    // 设置响应头
    response.setHeader('content-type','text/html;charset=utf-8');
    response.setHeader('Server','Node')
    // 设置多个响应头
    response.setHeader('test',['a','b','c'])

    // 响应体设置  可以设置多个
    response.write('love')
    response.write('you')
    // 有且只有一个
    response.end()  
})
server.listen(9000,()=>{
    console.log("服务器启动");
})