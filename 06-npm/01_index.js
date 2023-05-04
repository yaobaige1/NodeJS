const http = require('http')
const uniq = require('uniq')

const server = http.createServer((request,response)=>{
    let arr = [1,1,1,2,3,5,6,4,4,3,12,11,20,31,32,33]
    let newarr = uniq(arr)
    console.log(newarr);
    response.end("hello")
})
server.listen(9000,()=>{
    console.log("服务器启动成功");
})