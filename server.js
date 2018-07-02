const express = require('express')
const pug = require('pug');

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))