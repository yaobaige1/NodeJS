// 文件重命名
// 导入fs模块
// const fs = require('fs')
// // 调用rename方法
// fs.rename('./座右铭.txt','./论语.txt',err=>{
//     if(err) {
//         console.log("失败");
//         return
//     }
//     console.log("成功");
// })

//文件移动 
const fs = require('fs')
fs.rename('./data.txt','../资料/data.txt',err=>{
    if(err) {
        console.log("失败"); 
        return;
    }
    console.log("成功");
    
})