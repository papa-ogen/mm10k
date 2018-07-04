require('dotenv').config()
const express = require('express')
const helpers = require('./helpers');
const routes = require('./routes/index');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

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

io.on('connection', function (socket) {
  console.log('client connected');       
  socket.on('disconnect', function() {
      console.log('client disconnected');
  });  
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});