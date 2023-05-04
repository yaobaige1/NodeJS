const fs = require('fs')
// 创建写入流对象
const ws = fs.createWriteStream('./管书有感')
//write
ws.write('半亩方谭一鉴开\t\n');
ws.write('天光云影共徘徊\t\n');
ws.write('问渠哪得清的徐\t\n');
ws.write('为有团头祸水来\t\n')
//关闭通道
ws.end()