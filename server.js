const express = require('express')
const pug = require('pug');
const helpers = require('./helpers');
const routes = require('./routes/index');

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'))