const request = require('request')
const weatherController = require('../controllers/weatherController');

const getData = url => {
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

const errHandler = function(err) {
    console.log('Error', err);
}

const apiParams = {
  apiUrl: 'http://api.openweathermap.org/data/2.5/forecast',
  apiKey: process.env.WEATHER_KEY,
  coords: {
    lat: 59.3833,
    lon: 17.8333
  }
}
const requestUrl = weatherController.createRequestUrl(apiParams)

exports.getWeather = getData(requestUrl)
  .then(JSON.parse, errHandler)
  .then(data => {
      return weatherController.filterData(data)
  }, errHandler)
  .catch(console.error)