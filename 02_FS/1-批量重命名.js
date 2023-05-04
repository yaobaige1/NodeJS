// 导入fs模块
const fs = require('fs')
// 读取code文件夹
const files = fs.readdirSync('./code')

// 循环数文件夹中每一个文件 通过 split来划文件名分成数组 通过解构赋值
//  进行判断 是否小于10 来确认是否追加0 然后再 生成新的文件名 并用fs的 rename 重新命名
files.forEach(item => {
    // console.log(item);
    let data = item.split('-')
    console.log(data);
    let [num, name] = data
    if(Number(num)<10) {
        num = '0' + num;
    }
    let newName = num + '-' + name

    fs.renameSync(`./code/${item}`,`./code/${newName}`)
});