// 导入框架模块
var express = require('express');
// 获取数据库对象的操作
const UserModel = require('../../models/UserModel')
// 将时间 转化为时间对象  需要 npi i moment 下载先
const md5 = require('md5')
var router = express.Router();
const checkLoginMiddleware = require('../../middleware/checkLoginMiddleware');
const { render } = require('../../app');

// 注册页面
router.get('/reg', (req, res) => {
    res.render('auth/reg')
})
//注册
router.post('/reg', (req, res) => {
    // let {username,password} = req.body
    UserModel.create({ ...req.body, password: md5(req.body.password) })
        .then(re => {
            console.log("添加成功", re);
            res.render('success', { msg: '注册成功', url: '/login' })
        })
        .catch(er => {
            console.log("添加失败", er);
            res.status(500).send('注册失败')
        })
})

// 登入界面
router.get('/login', (req, res) => {
    res.render('auth/login')
})

// 登入判断
router.post('/login', (req, res) => {
    // console.log(req.body);
 

    let { username, password } = req.body
    UserModel.findOne({ username: username, password: md5(password) })
        .then(re => {
            console.log("我是re", re);

            if (re) {
                req.session.username = re.username
                req.session.password = re.password
                req.session._id = re._id
                console.log(req.session.username);
                res.render('success', { msg: '登鹿成功', url: '/account' })
            } else {
                res.send("登入失败,请检擦账号和密码")
            }
        })
        .catch(er => {
            console.log("我是er", er);
            res.status(500).send('登入失败，服务器超时')
        })

})

router.post('/logout',(req,res)=>{
    req.session.destroy(()=>{
        res.render('success',{msg:'退出',url:'/login'})
    })
})
module.exports = router;
