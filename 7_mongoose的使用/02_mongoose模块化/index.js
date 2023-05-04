const db = require('./db/db')
const mongoose = require('mongoose')
const BookModel = require('./models/BookModel')
db(() => {
    console.log("连接成功");
    BookModel.create({
        name: "西游记2",
        author: "吴承恩2",
        price: 223
    })
        .then(res => {
            console.log(res);
            //关闭数据库连接
            mongoose.disconnect()
        })
        .catch(err => {
            console.log(err);
        })
}, () => {
    console.log("连接失败");
})