const api = require('./api');
const requestUrl = 'http://api.dryg.net/dagar/v2.1/'

exports.get = () => {
  return api.getData(requestUrl)
  .then(JSON.parse, api.errHandler)
  .then((data) => {
      return data.dagar[0].namnsdag.join(', ')
  }, api.errHandler)
  .catch(console.error)
}