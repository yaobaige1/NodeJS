// 安装ejs  npm i ejs
// 导入ejs
const ejs = require('ejs')
const fs = require('fs')

let china = "中国";
let weather = "今天天气不错啊"

let str = fs.readFileSync('./01_html.html').toString()
// 使用ejs渲染
//render 是渲染   render内部会对str 进行解析 寻找 <%= %> 里面的内容  替换成 {} 里面的数据
let result = ejs.render(str,{china,weather})
console.log(result);