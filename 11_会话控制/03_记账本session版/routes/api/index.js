// 导入框架模块
var express = require('express');
// 获取数据库对象的操作
const AccountModel = require('../../models/AccountModel')
// 将时间 转化为时间对象  需要 npi i moment 下载先
const moment = require('moment')
var router = express.Router();


// 显示列表
router.get('/account', function (req, res, next) {
  // 从数据库中获取数据 并且倒序
  AccountModel.find().sort({ time: -1 })
    .then(re => {
      res.json({
        code: '0000',
        msg: '读取成功',
        data: re
      })
    })
    .catch(err => {
      res.json({
        code: '1001',
        msg: '读取失败',
        data: null
      })
    })
});

//修改数据
router.patch('/account/:_id', (req, res) => {
  let { _id } = req.params
  AccountModel.updateOne({ _id: _id }, req.body)
    .then(re => {
      AccountModel.findById({ _id: _id })
        .then(re => {
          res.json({
            code: '0000',
            msg: '修改成功',
            data: re
          })
            .catch(err => {
              res.json({
                code: '1010',
                msg: '修改失败',
                data: re
              })
            })
        })
    })
    .catch(err => {
      res.json({
        code: '1007',
        msg: '修改失败',
        data: null
      })
    })
})


// 获取单挑数据
router.get('/account/:_id', (req, res) => {
  let { _id } = req.params;
  AccountModel.findById(_id)
    .then(re => {
      console.log("查询单条成功", res);
      res.json({
        code: '0000',
        msg: '查询单条数据成功',
        data: re
      })
    })
    .catch(err => {
      console.log("查询单条失败", err);
      res.json({
        code: '1006',
        msg: '查询单条失败',
        data: null
      })
    })
})

//表单提交响应
router.post('/account', (req, res) => {
  console.log(req.body);
  // 添加数据到数据库    
  AccountModel.create({ ...req.body, time: moment(req.body.time).toDate() })
    .then(re => {
      console.log("添加成功", res);
      res.json({
        code: '0000',
        msg: '创建成功',
        data: re
      })
    })
    .catch(err => {
      console.log("添加失败", err);
      res.json({
        code: '1003',
        msg: '创建失败',
        data: null
      })
    })
})

//删除指定内容
router.delete('/account/:_id', (req, res) => {
  let _id = req.params._id
  AccountModel.deleteOne({ _id: _id })
    .then(re => {
      res.json({
        code: '0000',
        msg: '删除成功',
        data: {}
      })
    })
    .catch(err => {
      res.json({
        code: '1004',
        msg: '删除成功',
        data: null
      })
    })
})
module.exports = router;
