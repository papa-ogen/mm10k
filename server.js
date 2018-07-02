const express = require('express')
const pug = require('pug');

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index', { weatherData: {"location":"Skälby","weathers":[{"date":"Måndag","temp":"12.7","type":"clouds","descr":"klar himmel"},{"date":"Tisdag","temp":"10.3","type":"broken-cloud","descr":"blandade moln"},{"date":"Onsdag","temp":"12.5","type":"rain","descr":"blandade moln"}]} })
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))