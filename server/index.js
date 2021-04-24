const express = require('express')
const app = express()
const conn = require('./db2')
const formatDate = require('./time')

app.listen(10000, () => {
  console.log('server started listening at 10000')
})

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.all('*', function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  //允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  if (req.method.toLowerCase() == 'options') res.send(200)
  //让options尝试请求快速结束
  else next()
})

app.get('/todolist', (req, res) => {
  const sql = 'select * from todolist order by ?? desc'
  conn(sql, ['timeCreated'], (err, ress) => {
    if (err) {
      res.send({ data: null, meta: { status: 404, msg: '获取todolist失败' } })
    } else {
      res.send({
        data: ress,
        meta: { status: 200, msg: null },
      })
    }
  })
})

app.post('/todolist', (req, res) => {
  const { content } = req.body
  const sql = 'INSERT INTO todolist ( ?? ) VALUES ( ? );'
  conn(sql, ['content', content], (err, ress) => {
    if (err) {
      res.send({ data: null, meta: { status: 404, msg: 'todolist保存失败' } })
    } else {
      res.send({
        data: null,
        meta: { status: 200, msg: '保存成功' },
      })
    }
  })
})

app.put('/status', (req, res) => {
  let { id, status } = req.body
  let newStatus = parseInt(status) === 0 ? 1 : 0
  let date = formatDate(Date.now())
  const sql = 'UPDATE todolist SET ??=?, ??=? WHERE ??=?'

  conn(
    sql,
    ['status', newStatus, 'timeCreated', date, 'id', id],
    (err, ress) => {
      if (err) {
        console.log(err)
        res.send({ data: null, meta: { status: 404, msg: 'todolist更新失败' } })
      } else {
        res.send({
          data: null,
          meta: { status: 200, msg: '已成功更新该任务' },
        })
      }
    }
  )
})

app.delete('/todolist/:id', (req, res) => {
  const { id } = req.params
  const sql = 'delete from todolist where ?? =?'
  conn(sql, ['id', id], (err, ress) => {
    if (err) {
      res.send({ data: null, meta: { status: 404, msg: 'todolist删除失败' } })
    } else {
      res.send({
        data: null,
        meta: { status: 200, msg: '已成功删除' },
      })
    }
  })
})
