// 导入http模块
const http = require('http')
// 导入url模块
const url = require('url')
// 创建http服务
const server = http.createServer((request,response)=>{
    // 解析 request.url   输出的数据难已使用   使用url模块 
    // console.log(request.url);

    // 解析 请求内容的url  parse的解析的意思  true是启动 输出的数据的对象形式
    let res = url.parse(request.url, true);
    // 路径
    let pathname = res.pathname
    //查询的字符串  keyword 是查询字符串 路径携带的
    let keyword = res.query.keyword
    console.log(pathname,keyword);
    response.end('hello')
})
server.listen(9000,()=>{
    console.log("9000服务器启动成功");
})