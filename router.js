var express = require('express')
var db = require('./model/mysql.js');
var md5 = require('blueimp-md5')
var router = express.Router()

function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0;
}
router.get('/', function(req, res) {
    res.render('index.html', req.session.user)
})
router.get('/login', function(req, res) {
    res.render('login.html')
})
router.post('/login', async function(req, res) {
    //1.获取表单提交的数据
    //2.操作数据库
    // 判断该用户名是否存在：如果已存在，判断密码是否正确
    // 如果不存在，提示用户不存在，请注册账号
    //3.发送响应
    var body = req.body
    body.password = md5(md5(body.password))
    try {
        var querySql = 'select * from user where username=? and password=?'
        await db.query(querySql, [body['username'], body['password']], function(result, fields) {
            if (isEmptyObject(result)) {
                return res.status(200).json({
                    err_code: 1,
                    message: '用户名或密码错误'
                })
            } else {
                req.session.user = JSON.stringify(result)
                return res.status(200).json({
                    err_code: 0,
                    message: 'Ok'
                })
            }
        })
    } catch (err) {
        return res.status(500).json({
            err_code: 500,
            message: 'Server error'
        })
    }
})
router.get('/register', function(req, res) {
    res.render('register.html')
})
router.post('/register', async function(req, res) {
    var params = []
    var body = req.body
    body.password = md5(md5(body.password))
    try {
        params.push(body['username'])
        params.push(body['email'])
        params.push(body['phone'])
        var querySql = 'select * from user where username=? OR phone=? or email=?'
            //判断输入的用户名，手机号，邮箱是否已经存在
        await db.query(querySql, params, function(result, fields) {
            //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
            function isEmptyObject(e) {
                var t;
                for (t in e)
                    return !1;
                return !0;
            }
            if (!isEmptyObject(result)) {
                return res.status(200).json({
                    err_code: 1,
                    message: '用户名或手机号或邮箱已经存在'
                })
            } else {
                params.splice(1, 0, body['password'])
                var addSql = 'insert into user(username,password,email,phone,created_time,last_modified_time)values(?,?,?,?,curtime(),curtime())'
                db.query(addSql, params, function(result, fields) {
                    if (result) { //注册成功跳转到登录页面
                        req.session.user = JSON.stringify(result)
                        res.render('login.html')
                    }
                })
            }
        })
    } catch (error) {
        return res.status(500).json({
            err_code: 500,
            message: 'Server error'
        })
    }
})
router.get('/about', function(req, res) {
    res.render('about.html')
})
router.get('/create', function(req, res) {
    res.render('create.html')
})
router.get('/best', function(req, res) {
    res.render('best.html')
})
router.get('/all', function(req, res) {
    res.render('all.html')
})
router.get('/usercenter', function(req, res) {
    res.render('usercenter.html')
})
module.exports = router