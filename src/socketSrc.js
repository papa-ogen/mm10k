const fs = require('fs');

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