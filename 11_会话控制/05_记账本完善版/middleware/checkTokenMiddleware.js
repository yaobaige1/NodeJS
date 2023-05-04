const jwt = require('jsonwebtoken')
const { secret } = require('../config/config')
//校验token中间件
module.exports = (req, res, next) => {
    //获取token
    let token = req.get('token');
    // 判断
    if (!token) {
        return res.json({
            code: '2003',
            msg: 'token 缺失',
            data: null
        })
    }
    //校验token
    jwt.verify(token, secret, (err, data) => {
        // 检测token是否正确
        if (err) {
            return res.json({
                code: '2004',
                msg: 'token 校验失败',
                data: null
            })
        }
        req.user = data
        next()
    })
}