// 导入fs模块
const fs = require('fs')

// 创建读取流式对象
const rs = fs.createReadStream('./管书有感.txt')
    
// 绑定data事件 
rs.on('data',chunk=>{
    console.log(chunk.toString());
})

//end 有选事件 执行完 data后 执行
rs.on('end',()=>{
    console.log("end来了");
})