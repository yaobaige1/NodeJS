const mongoose = require('mongoose')
let UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,  //设置必填项
    },
    password:{
        type:String,
        require:true
    }
})
// 创建模型对象，对文档操作的发展对象  book 是数据库中 集合的名称  BookSchema是 结构对象 相当于文档的结构
let UserModel = mongoose.model('user',UserSchema);
 
module.exports =  UserModel