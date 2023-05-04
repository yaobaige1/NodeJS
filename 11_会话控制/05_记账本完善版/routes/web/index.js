// 导入框架模块
var express = require('express');
// 获取数据库对象的操作
const AccountModel = require('../../models/AccountModel')
// 将时间 转化为时间对象  需要 npi i moment 下载先
const moment = require('moment')
const checkLoginMiddleware = require('../../middleware/checkLoginMiddleware')
var router = express.Router();

// 首页路由规则
router.get('/',(req,res)=>{
  res.redirect('/account')
})

// 显示列表
router.get('/account',checkLoginMiddleware,function (req, res, next) {
  // 从数据库中获取数据 并且倒序
  AccountModel.find().sort({ time: -1 })
    .then(re => {
      console.log("获取成功", res);
      res.render('account', { accounts: re })
    })
    .catch(err => {
      console.log("获取失败", err);
    })

  // res.render('account',{accounts:accounts})
});
//显示表单
router.get('/account/create',checkLoginMiddleware,function (req, res, next) {
  res.render('create')
});
//表单提交响应
router.post('/account', (req, res) => {
  console.log(req.body);
  // 添加数据到数据库    
  AccountModel.create({ ...req.body, time: moment(req.body.time).toDate() })
    .then(res => {
      console.log("添加成功", res);
    })
    .catch(err => {
      console.log("添加失败", err);
    })
  // res.send('添加成功')
  res.render('success', { msg: "添加成功", url: '/account' })
})

//删除指定内容
router.get('/account/:id', (req, re) => {
  let id = req.params.id
  AccountModel.deleteOne({ _id: id })
    .then(res => {
      console.log("删除成功", res);
      re.render('success', { msg: "添加成功", url: '/account' })
    })
    .catch(err => {
      console.log("删除失败", err);
    })
})
module.exports = router;
