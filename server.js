require('dotenv').config()
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const socketSrc = require('./src/socketSrc')
const helpers = require('./helpers')
const routes = require('./src/index')

app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

app.use(express.static('public'))

app.use((req, res, next) => {
  res.locals.h = helpers
  next()
})

app.use('/', routes)

// Update clock
socketSrc.updateClock(io)

// Get bg images
socketSrc.getBgImages(io)

// Get todays name
socketSrc.getTodaysName(io)

io.on('connection', (socket) => {
  console.log('client connected') /* eslint-disable-line */

  socket.on('disconnect', () => {
    console.log('client disconnected') /* eslint-disable-line */
  })
})

http.listen(3000, () => {
  console.log('listening on *:3000') /* eslint-disable-line */
})
