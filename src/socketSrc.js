const fs = require('fs');
const ontime = require('ontime');
const api = require('./api');

exports.getBgImages = (io) => {
  const folder = './public/backgrounds/';
  const imageFiles = [];

  fs.readdir(folder, (err, files) => {
    if(err) {
      console.error(err)
      return;
    }
    files.forEach(file => {
      if(file !== '.DS_Store') {
        imageFiles.push(file)
      }
    });

    io.on('connection', function (socket) {
      socket.emit('bg-image', imageFiles);
    });
  })
}

exports.updateClock = (io) => {
  const clock = require('../controllers/clockController');

  setInterval(function() {
    io.emit('clock', clock.getCurrentTime());
  }, 1000);
}

exports.getTodaysName = (io) => {
  const requestUrl = 'http://api.dryg.net/dagar/v2.1/'

  ontime({
    cycle: [ '00:01:00']
  }, function (ot) {
    api.getData(requestUrl)
    .then(JSON.parse, api.errHandler)
    .then((data) => {
        io.emit('todaysNames', data.dagar[0].namnsdag.join(', '));
      }, api.errHandler)
      .catch(console.error)
  
    ot.done()
    return
  })
}