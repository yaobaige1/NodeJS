var express = require('express');
// 导入解析文件的模块
const formidable = require('formidable');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', (req, res) => {
  res.render('home')
})
router.post('/home', (req, res) => {
  const form = formidable({
    multiples: true,
    // 存入路径
    uploadDir: __dirname + '/../public/images',
    // 是否携带尾缀
    keepExtensions: true
  });
  //fields 用于接受文本数据 对象 数组等  files用于接受文件类 图片  
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    // console.log("我是fields", fields);
    console.log("我是files", files);
    //服务器保存该图片的访问url
    // /images/32131231232.jpg
    let url = '/images/' + files.file.newFilename;
    res.send(url)
    // res.json({ fields, files });
  });
})

module.exports = router;
