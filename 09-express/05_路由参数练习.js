// 登入express模块
const express = require('express')
//如果 singers 没有使用解构 那么如果直接使用 singers 会 又出现一个数组  数组里才含数据对象
const {singers} = require('./singers.json')
// 创建应用对象
const app = express();

// 创建路由

//页面第一进来的页面是"/"  且是get请求时 执行
app.get('/:id.html',(req,res)=>{
    //获取请求来的id
    let id = req.params.id
    //从 singers 找出 id 为请求id 的数据  find 的返回值是数据  findindex返回的是该数据的索引
    // return true 是返回 正确的处理结果 就是 singer的id == id 了 就返回该singer  
    // 所以 return true 相当于 return singer
    let result = singers.find(singer=>{
        if(singer.id == id) {
            return true
        }
    })
    console.log(result);
    // 如果请求到的id 数据库没有 便为 undefined  为flase  !flase 为ture 变执行 否则就查到 响应出去
    if(!result) {
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>")
    } else {
        res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>${result.singer_name}</h1>
            <img src="${result.singer_pic}" alt="">
        </body>
        </html>
        `)
    }
})


app.listen(9000,()=>{
    console.log("服务器");
})