// 导入fs模块
const fs = require('fs')
// 单个创建
// fs.mkdir('./html',err=>{
//     if(err) {
//         console.log("失败",err);
//         return
//     }
//     console.log("成功");
// })

// 递归创建
// fs.mkdir('./a/b/c', { recursive: true }, err => {
//     if (err) {
//         console.log("失败", err);
//         return
//     }
//     console.log("成功");
// })

// 查询文件夹
// fs.readdir('./资料', (err,data) => {
//     if (err) {
//         console.log("失败", err);
//         return
//     }
//     console.log("成功",data);
// })

//删除文件夹  推荐使用rmdir
// fs.rmdir('./html', err => {
//     if(err) {
//         console.log("失败",err);
//         return
//     }
//     console.log("成功");
// })

// 递归删除文件夹   不推荐使用rmdir
fs.rm('./a', { recursive: true }, err => {
    if (err) {
        console.log("失败", err);
        return
    }
    console.log("成功");
})