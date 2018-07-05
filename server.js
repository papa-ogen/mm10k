require('dotenv').config()
const express = require('express')
const helpers = require('./helpers');
const routes = require('./src/index');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ontime = require('ontime');
const api = require('./src/api');
const socketSrc = require('./src/socketSrc')

app.set('views', __dirname + '/views');
app.set('view engine', 'pug')

app.use(express.static('public'))

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

app.use('/', routes);

// Update clock
const clock = require('./controllers/clockController')

setInterval(function() {
  io.emit('clock', clock.getCurrentTime());
}, 1000);

ontime({
  cycle: [ '00:00:01']
}, function (ot) {
  // Get todays name
  const requestUrl = 'http://api.dryg.net/dagar/v2.1/'
  api.getData(requestUrl)
  .then(JSON.parse, api.errHandler)
  .then((data) => {
      io.emit('todaysNames', data.dagar[0].namnsdag.join(', '));
    }, api.errHandler)
    .catch(console.error)

  ot.done()
  return
})

socketSrc.getBgImages(io);

io.on('connection', function (socket) {
  

  socket.on('disconnect', function() {
      console.log('client disconnected');
  });  
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});