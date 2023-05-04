//1.导入fs模块
const fs = require('fs');

// 2.写入文件
fs.writeFile('./座右铭.txt','三人行，都是贴四日',err=>{
    if(err) {
        console.log("写入失败");
        return;
    } 
    console.log("写入成功");
})