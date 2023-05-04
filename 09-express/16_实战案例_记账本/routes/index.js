// 导入框架模块
var express = require('express');
// 导入随机id模块  链接：https://www.npmjs.com/package/shortid
const shortid = require('shortid')
var router = express.Router();

// 导入数据存储模块 
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)

// 显示列表
router.get('/account', function (req, res, next) {
  let accounts = db.get('accounts').value()
  res.render('account',{accounts:accounts})
});
//显示表单
router.get('/account/create', function (req, res, next) {
  res.render('create')
});
//表单提交响应
router.post('/account', (req, res) => {
  console.log(req.body);
  // 获取随机id
  let id = shortid.generate()
  // 添加数据的db.json
  db.get('accounts').unshift({ id: id, ...req.body }).write()
  // res.send('添加成功')
  res.render('success',{msg:"添加成功",url:'/account'})
})

//删除指定内容
router.get('/account/:id',(req,res)=>{
  let id = req.params.id
  db.get('accounts').remove({id:id}).write()
  res.render('success',{msg:"添加成功",url:'/account'})
})
module.exports = router;
