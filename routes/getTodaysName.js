const api = require('./api')

const errHandler = function(err) {
    console.log('Error', err);
}

const requestUrl = 'http://api.dryg.net/dagar/v2.1/'

exports.getTodaysName = api.getData(requestUrl)
  .then(JSON.parse, errHandler)
  .then((data) => {
      return data.dagar[0].namnsdag.join(', ')
  }, errHandler)
  .catch(console.error)
