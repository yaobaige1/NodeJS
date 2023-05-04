const fs = require('fs')
    // append 附加
// fs.appendFile('./座右铭.txt','择其善者而不为，择不伤者而改之',err=>{
//     if(err) {
//         console.log("加入失败");
//         return
//     }
//     console.log("加入成功");

// })

// fs.appendFileSync('./座右铭.txt','\t\n择其善者而不为，择不伤者而改之')

fs.writeFile('./座右铭.txt','\t\n择其善者而不为，择不伤者而改之',{flag:'a'},err=>{
    if(err) {
        console.log("加入失败");
        return
    }
    console.log("加入成功");
})