// 导入http模块
const http = require('http')

// 2.创建服务对象  request 请求   response  响应
const server = http.createServer((request,response)=>{
    //设置响应头的编码格式 作用:识别中文
    response.setHeader('content-type','text/html;charset=utf-8')
    response.end('hello HTPP Word')  //设置响应体
})

// 3.监听端口，启动服务
server.listen(9000,()=>{
    console.log('服务器已启动。。。');
})