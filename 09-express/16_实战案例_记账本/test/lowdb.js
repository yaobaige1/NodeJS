const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

//初始化文件  defaluts 默认  write 写入
// db.defaults({ posts: [], user: {} }).write()

// 追加数据
// db.get('posts').push({ id: 2, title: '李四' }).write()
// db.get('posts').unshift({ id: 3, title: '赵武' }).write()

//获取单挑数据
// let res = db.get('posts').find({id:1}).value()
// console.log(res);

// 获取全部数据
// let res = db.get('posts').value()
// console.log(res);

// 删除数据  并 接收返回
// let res = db.get('posts').remove({id:2}).write()
// console.log(res);

// 更新数据  find 查找  assign 分配 转让
db.get('posts').find({id:3}).assign({title:"今天飞机了"}).write()
