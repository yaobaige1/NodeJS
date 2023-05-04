const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/bilibili')

mongoose.connection.once('open',()=>{
    // 创建集合中文档的属性以及属性值的类型   Schema用结构的意思  就是之后 插入的信息 必须的值必须是这个类型的才行
    let BookSchema = new mongoose.Schema({
        name:String,
        author:String,
        price:Number
    })
    
    // 创建模型对象，对文档操作的发展对象  book 是数据库中 集合的名称  BookSchema是 结构对象 相当于文档的结构
    let BookModel = mongoose.model('book',BookSchema);

    // 新增数据
    BookModel.create({
        name:"西游记",
        author:"吴承恩",
        price:22
    })
    .then(res=>{
        console.log(res);
        //关闭数据库连接
        mongoose.disconnect()
    })
    .catch(err=>{
        console.log(err);
    })
})

mongoose.connection.once('error',()=>{
    console.log("连接出错");
})

mongoose.connection.once('close',()=>{
    console.log("服务连接关闭");
})