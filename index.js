const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const bodyParser = require('body-parser')
const routers = require('./routers/routers')
const middlewares = require('./middlewares/index')
const app = express()

// 静态文件目录
app.use(express.static(path.join(__dirname, 'public')))

// 配置模板引擎
nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app
})

app.set('view engine', 'html')
// 中间件 bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(middlewares)
// // 路由
// app.get('/', (req, res)=>{
//     res.send('HELLO mongo')
// })
routers(app)
const server = app.listen(3000, function () {
    console.log('app listening at http:localhost:3000')
})
