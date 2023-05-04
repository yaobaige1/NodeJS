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

    // 字段筛选读取 0表示不要读取  1表示要读取  slelect 用选择的意思
    // BookModel.find().select({ _id: 0, name: 1, price: 1 })
    //     .then(res => {
    //         console.log("成功", res);
    //     })
    //     .catch(err => {
    //         console.log("失败", err);
    //     })

    // 数据排序 sort 中 price是排序的对象 1 是升序 -1是降序   sort用排序的意思
    // BookModel.find().select({ _id: 0, name: 1, price: 1 }).sort({ price: 1 })
    //     .then(res => {
    //         console.log("成功", res);
    //     })
    //     .catch(err => {
    //         console.log("失败", err);
    //     })

       // 数据截取 skip 表示跳过 跳过前面的数据 从第某个的开始  limit 表示限制 限制多少个数据
    BookModel.find().select({ _id: 0, name: 1, price: 1 }).sort({ price: 1 }).skip(3).limit(4)
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