const api = require('./api')
const requestUrl = 'http://api.dryg.net/dagar/v2.1/'

exports.get = () => api.getData(requestUrl)
  .then(JSON.parse, api.errHandler)
  .then(data => data.dagar[0].namnsdag.join(', '), api.errHandler)
  .catch(console.error) /* eslint-disable-line */
