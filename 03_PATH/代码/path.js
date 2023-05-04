const fs = require('fs')
const path = require('path')

// 写入文件
// 这样子写 会导致 路径名不规范  F:\Nodejs\13-PATH\代码/index.html
// fs.writeFileSync(__dirname +  '/index,html','love')
// console.log(__dirname +  '/index,html');

// path.resolve 解决  自动规范
// console.log(path.resolve(__dirname +  './index,html'));
// console.log(path.resolve(__dirname +  'index,html'));
// console.log(path.resolve(__dirname +  '/index,html')); //不能这样子 两个绝对路径

// path.sep 获取当前操作系统分隔符
// console.log(path.sep);  // window \  Linux  /

// path.parse 方法 解析路径并返回对象  __dirname  '全局变量'
console.log(__filename); //文件的绝对路径 
let str = 'F:\\Nodejs\\13-PATH\\代码\\path.js'
console.log(path.parse(str));

// path.besename 获取路径的基础名
console.log(path.basename(str));

// path.dirname  获取路径的目录名
console.log(path.dirname(str));

// path.extname  获取路径的扩展名
console.log(path.extname(str));