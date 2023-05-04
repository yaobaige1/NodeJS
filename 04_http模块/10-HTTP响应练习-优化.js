const http = require('http')
const fs = require('fs')
const serve = http.createServer((request, response) => {
    let html = fs.readFileSync(__dirname + '/10-test.html')
    response.end(html)
})
serve.listen(9000, () => {
    console.log("服务器启动");
})