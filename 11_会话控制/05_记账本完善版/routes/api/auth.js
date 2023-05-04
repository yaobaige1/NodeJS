// 导入框架模块
var express = require('express');
// 获取数据库对象的操作
const UserModel = require('../../models/UserModel')
// 将时间 转化为时间对象  需要 npi i moment 下载先
const md5 = require('md5')
const jwt = require('jsonwebtoken')
var router = express.Router();
const { render } = require('../../app');

// 登入判断
router.post('/login', (req, res) => {
    // console.log(req.body);
    let { username, password } = req.body
    UserModel.findOne({ username: username, password: md5(password) })
        .then(re => {
            console.log("我是re", re);
            if (re) {
                // 登入成功后添加token
                let token = jwt.sign({
                    username: re.username,
                    _id: re._Id
                }, 'ow100505', { expiresIn: 60 * 60 * 60 * 24 })

                res.json({
                    code: '0000',
                    msg: '登录成功',
                    data: token
                })
            } else {
                res.json({
                    code: '2002',
                    msg: '用户名或密码错误',
                    data: null
                })
            }
        })
        .catch(er => {
            console.log("我是er", er);
            res.json({
                code: '2001',
                msg: '数据库读取失败',
                data: null
            })
        })

})

router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.render('success', { msg: '退出', url: '/login' })
    })
})
module.exports = router;
