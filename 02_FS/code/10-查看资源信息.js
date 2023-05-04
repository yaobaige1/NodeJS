const fs = require('fs')
// 查询状态
fs.stat('./论语.txt',(err,data)=>{
    if(err) {
        console.log("失败");
        return
    }
    console.log("成功",data);
    // 判断是不是文件
    console.log(data.isFile());
    // 判断是不是文件夹
    console.log(data.isDirectory());
})