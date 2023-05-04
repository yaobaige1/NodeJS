const http = require('http')
const fs = require('fs')
const path = require('path')
// 设置mines 类型
let mimes = {
    html:'text/html',
    css:'text/css',
    js:'text/javascript',
    png:'image/png',
    jpg:'image/jpg',
    gif:'image/gof',
    mp4:'video/mp4',
    mp3:'audio/mpeg',
    json:'applicaation/json'
}
const server = http.createServer((request,response)=>{
    // 通过URL实例获取更为具体的pathname
    let {pathname} = new URL(request.url,'http://127.0.0.1:9001')
    // 定义一个根目录
    const root = __dirname + '/page'
    // 字符串拼接 为每次发起请求 重新刷新的 获取js css 等 pathname 生成一个新的文件地址
    let filePath = root + pathname;
    // 获取文件的后缀名
    let ext = path.extname(pathname).slice(1)
    //获取对于的类型
    let type = mimes[ext]
    console.log(ext);
    console.log("我是pathname",pathname,filePath);
    // 进行访问文件
    fs.readFile(filePath,(err,data)=>{
        if(err) {
           //设置字符集
           response.setHeader('content-type','text/html;charset=utf-8');
           //判断错误的代号
           switch(err.code) {
            // 没有该文件地址
            case 'ENOENT':
                response.statusCode = 404;
                response.end('<1>404 Not Found</h1>');
            // 访问请求被网页禁止
            case 'EPERM':
                response.statusCode = 403;
                response.end('<1>403 Forbidden</h1>')
            default:
                response.statusCode = 500;
                response.end('<h1>Internal Server Error</h1>')
           }
            return;     
        }
        if(type) {
            // 匹配到
              //如果文件后缀名是html的就执行 utf-8 的 字符集 因为 当执行html时 css js 回到html页面时 会已网页的字符集为标准
            if(ext == 'html') {
                response.setHeader('content-type',type + 'charset=utf-8')
            } else {
                response.setHeader('content-type',type)
            }
        } else {
            // 没有匹配到
            response.setHeader('content-type','application/octet-stream');
        }
        response.end(data)
    })
})
server.listen(9001,()=>{
    console.log("服务器启动成功");
})