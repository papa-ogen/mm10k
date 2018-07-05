const request = require('request')

exports.getData = (url) => {
  const options = {
    url,
    headers: {
      'User-Agent': 'request',
    },
  }

  return new Promise((resolve, reject) => {
    request.get(options, (err, resp, body) => {
      if (err) {
        reject(err)
      } else {
        resolve(body)
      }
    })
  })
}

exports.errHandler = (err) => {
  console.error('Error', err) /* eslint-disable-line */
}
