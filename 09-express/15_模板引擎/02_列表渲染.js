const ejs = require('ejs')
const fs = require('fs')
let xiyou = ['猪八戒','沙增','唐僧','孙悟空','白龙马']
let str = fs.readFileSync('./02_html.html').toString()
let result = ejs.render(str,{xiyou:xiyou})
console.log(result);