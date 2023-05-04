// 引入fs模块
const fs = require('fs')
// 异步读取
// fs.readFile('./管书有感.txt',(err,data)=>{
//     if(err) {
//         console.log("失败");
//         return
//     }
//     console.log(data.toString());
// })

// 同步读取
let data = fs.readFileSync('./管书有感.txt')
console.log(data.toString());