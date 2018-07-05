const api = require('./api')
const weatherController = require('../controllers/weatherController')

// Get weather forecast
const apiParams = {
  apiUrl: 'http://api.openweathermap.org/data/2.5/forecast',
  apiKey: process.env.WEATHER_KEY,
  coords: {
    lat: 59.3833,
    lon: 17.8333,
  },
}
const weatherRequestUrl = weatherController.createRequestUrl(apiParams)

exports.getWeather = () => api.getData(weatherRequestUrl)
  .then(JSON.parse, api.errHandler)
  .then(result => weatherController.filterData(result), api.errHandler)
  .catch(console.error) /* eslint-disable-line */

exports.weatherController = () => weatherController.homePage
