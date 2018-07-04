const request = require('request');

exports.getData = function(url) {
  const options = {
      url: url,
      headers: {
          'User-Agent': 'request'
      }
  };

  return new Promise((resolve, reject) => {
      request.get(options, (err, resp, body) => {
          if (err) {
              reject(err);
          } else {
              resolve(body);
          }
      })
  })
}

exports.errHandler = function(err) {
    console.error('Error', err);
}