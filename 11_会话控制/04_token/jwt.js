// 导入 jwt
const jwt = require('jsonwebtoken')

// 创建（生成）token
// const token = jwt.sign({
//     name:"张三",
//     age:22
// },'ow100505',{expiresIn:600})
// console.log(token);

// 校验 Token
let tok = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi5byg5LiJIiwiYWdlIjoyMiwiaWF0IjoxNjgzMDg5NDU1LCJleHAiOjE2ODMwOTAwNTV9.7MJdPDXIR60HqOazLxnmrNzssj3Ob3AwsO1hULeUo2Q'
jwt.verify(tok, 'ow100505',(err,data)=>{
    if(err) {
        console.log("失败");
        return
    }
    console.log(data);
})