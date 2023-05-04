 const mongoose = require('mongoose')
 // 创建集合中文档的属性以及属性值的类型   Schema用结构的意思  就是之后 插入的信息 必须的值必须是这个类型的才行
 let AccountSchema = new mongoose.Schema({
    title:{
        type:String,

    },
    time:{
        type:Date,

    },
    type:{
        type:Number,
        default:-1
    },
    account:{
        type:Number,

    },
    remarks:{
        type:String
    }
})

// 创建模型对象，对文档操作的发展对象  book 是数据库中 集合的名称  BookSchema是 结构对象 相当于文档的结构
let AccountModel = mongoose.model('account',AccountSchema);
 
module.exports =  AccountModel