const http = require('http')
const server = http.createServer((request,response) => {
    // 实例化URL对象
    let url = new URL(request.url,'http://127.0.0.1:9000')
    console.log(url);
    //输出路径
    console.log(url.pathname);
    // 输出 keyword 查询字符串
    console.log(url.searchParams.get('keyword'));
    response.end('url new')
})
server.listen(9000,()=>{
    console.log("服务器启动成功");
})