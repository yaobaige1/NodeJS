// 第一种
// // 导入fs模块
// const fs = require('fs')
// fs.unlink('./管书有感复制版2.txt',err=>{
//     if(err) {
//         console.log("失败");
//         return
//     }
//     console.log("成功");
// })

// 第二种
const fs = require('fs')
fs.rm('./管书有感复制版.txt', err => {
    if (err) {
        console.log("失败");  
        return
    }
    console.log("成功");
})