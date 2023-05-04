const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/bilibili')
mongoose.connection.on('open', () => {
    console.log("服务器启动成功");
    // 创建集合中文档的属性以及属性值的类型   Schema用结构的意思  就是之后 插入的信息 必须的值必须是这个类型的才行
    let BookSchema = new mongoose.Schema({
        name: {
            type: String,
            require: true,  //设置必填项
            unique: true     //设置为独一无二的 当有命令冲突时自动报错
        },
        author: {
            type: String,
            default: '匿名' //设置默认值
        },
        price: Number,
        is_hot: Boolean,
    })

    // 创建模型对象，对文档操作的发展对象  book 是数据库中 集合的名称  BookSchema是 结构对象 相当于文档的结构
    let BookModel = mongoose.model('novel', BookSchema);

    // 获取 price 小于20 的数据
    // BookModel.find({price:{$lt:20}})
    // .then(res=>{
    //     console.log("成功",res);
    // })
    // .catch(err=>{
    //     console.log("失败",err);
    // })

    // 获取 price 大于30 小于40 的数据  and
    // BookModel.find({ $and: [{price:{$gt:30}},{price:{$lt:40}}] })
    //     .then(res => {
    //         console.log("成功", res);
    //     })
    //     .catch(err => {
    //         console.log("失败", err);
    //     })

    // 读取曹雪芹或者余华的数据  or
    // BookModel.find({ $or: [{ author: "曹雪芹" }, { author: "余华" }] })
    //     .then(res => {
    //         console.log("成功", res);
    //     })
    //     .catch(err => {
    //         console.log("失败", err);
    //     })

    // 正则匹配  第一种
    // BookModel.find({ name: /三/ })
    //     .then(res => {
    //         console.log("成功", res);
    //     })
    //     .catch(err => {
    //         console.log("失败", err);
    //     })

    //正则第二种
    BookModel.find({ name: new RegExp('三') })
        .then(res => {
            console.log("成功", res);
        })
        .catch(err => {
            console.log("失败", err);
        })

})
mongoose.connection.on('error', () => {
    console.log("服务器连接出差");
})
mongoose.connection.on('colse', () => {
    console.log("服务器连接关闭");
})