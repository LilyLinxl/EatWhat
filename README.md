# EatWhat
+ 1.项目概述：本项目是为了帮助解决世纪性难题——中午吃什么？而进行的实战练手项目 ，
+ 2.PRD 目录： 
1．登录/注册 
2．首页-中午吃什么？ 
(1) 未登录状态下可点击随机吃什么 
(2) 未登录状态下创建专属吃什么 
(3) 分享 
3．页面二-创建吃什么 
(1) 标题、吃什么、描述、封面图片上传 
(2) 封面图上传 
4．页面三-大家吃什么 
5．页面四-什么最好吃 
6．页面五-关于我们 
7．页面六-个人中心

## 一、项目结构
### 1.package.json   
npm init -f
### 2.reademe ,.gitignore
### 3.安装express mongoose
### 4.新建public公共资源文件夹
img,css,js
### 5.app.js 入口文件
+ 1.path模块:http://nodejs.cn/api/path.html#path_path_dirname_path
+ 2. __dirname和__filename(推荐与path.join配合使用)
动态获取当前模块/文件所在的绝对路径
不受执行node命令所属路径影响

在文件操作中，使用相对路径是不可靠的，因为在Node中文件操作的路径被设计为相对于
执行node命令所处的路径
所以为了解决这个问题，只需要把相对路径变为绝对路径就可以了，但是如果项目迁移了，就很不方便了
所以最后我们可以使用__dirname或者 __filename来解决问题
### 5.db文件夹
dbHelper放操作数据库的一些方法 

## 二、模板引擎和页面
先安装模板引擎，再把基础代码写上
express-art-template
### 2.1 将公共模块独立出来
头部，尾部
#### 2.1.1 引入子模板
{{include './header.html'}}
>子模板载入函数
引入的模板内容在引入的文件中是不能新增内容的
#### 2.1.2 继承和使用模板
>模板继承模板导入函数
继承的模板内容在引入的文件中是可以新增内容的,根据不同的block添加相应的内容
{{extend './layout.html'}}
{{block 'content'}} 默认内容 {{/block}}

使用模板时的格式
{{extend './layout.html'}} {{block 'content'}}
<div>
    <h1>index 页面填坑内容</h1>
</div>
{{/block}}

#### 2.1.3 在模板中引入样式和js文件：jquery，bootstrap
#### 2.1.4 给css和js资源也留一个待填的”坑“,用于不同页面引用自己的样式和js

## 2.2 写页面（html,css）
### 1.注册
+ 1.静态页面
+ 2.短信验证接口（项目没有上线，这个放后面再做）
https://blog.csdn.net/qq_39969226/article/details/101155363

待解决问题 session对用户信息的存储
user用户信息对象一直存不进session里
### 2.登录
### 3.主页面

### 4.
### 5.

## 三、路由设计

| 路径      | 方法 | get参数 | post参数                | 是否需要登录 | 备注         |
| --------- | ---- | ------- | ----------------------- | ------------ | ------------ |
| /         | GET  |         |                         |              | 渲染首页     |
| /register | GET  |         |                         |              | 渲染注册页面 |
| /register | POST |         | email,nickname,password |              | 处理注册请求 |
| /login    | GET  |         |                         |              | 渲染登录首页 |
| /login    | POST |         | email,password          |              | 处理登录请求 |
| /logout   | GET  |         |                         |              | 处理退出请求 |
| /menu     | post |         |                         |              |处理获取菜单请求  |
| /tempMenu  | GET  |         |                         |              |渲染临时菜单页面 |
| /createMenu| get  |         |                         | 是           |渲染创建吃什么的页面 |
| /submitMenu| post |         |                         | 是           |处理提交菜单的请求  |
| /allMenu   | get  |         |                         | 否           |渲染大家吃什么页面  |
| /oneMenu   | get  |menuId   |                         | 否           |根据所选菜单渲染首页  |
| /allDish   | get  |         |                         | 否           |渲染什么最好吃页面  |
| /about     | get  |         |                         | 否           |渲染关于我们页面  |
| /userCenter| get  |         |                         | 是           |渲染个人中心页面  |
| /updateUser| post |         | imgUrl,nickname,email   | 是           |处理修改用户信息的请求  |
| /deleteMenu| post |         | menuId                  | 是           |处理删除菜单的请求  |
### 3.1 编写路由
处理注册页面，配置body-parser

## 四、设计数据库
数据库名称：eat-what
表：
user:userId,username,password,email,phone,menuIds,avatar,created_time,last_modified_time
menu:

## 五、提取路由模块，封装数据处理文件
因为没有实际做过，所以可能封装的不是很规范
### 1.dbHelper.js

## 六、前端调用后端接口，实现具体功能，前后端交互
