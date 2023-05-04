const http = require('http')
const fs = require('fs')
const serve = http.createServer((request, response) => {
    // 解构出pathname
    let { pathname } = new URL(request.url, 'http://127.0.0.1:9000')
    // 当导入 css js 文件时，如果在nodejs设置只设置html的响应 
    // 是不会连带列入html中 link script 的 都会默认使用html的响应 会造成响应体全是html的内容
    // 所以在nodejs文件中，也要设置相应的响应体 这里通过每一个文件触发请求的 通过请求行的pathname判断
    // 来响应各自   
    if (pathname == '/') {
        let html = fs.readFileSync(__dirname + '/10-test.html')
        response.end(html)
    } else if (pathname == '/index.css') {
        let css = fs.readFileSync(__dirname + '/index.css')
        response.end(css)
    } else if (pathname == '/index.js') {
        let js = fs.readFileSync(__dirname + '/index.js')
        response.end(js)
    } else {
        response.statusCode = 404;
        response.end('<h1>404 Not Found</h1>')
    }
})
serve.listen(9000, () => {
    console.log("服务器启动");
})