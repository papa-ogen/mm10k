const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const api = require('./api');
const request = require('request');

// Get todays name
const requestUrl = 'http://api.dryg.net/dagar/v2.1/'
const getTodaysName = api.getData(requestUrl)
  .then(JSON.parse, api.errHandler)
  .then((data) => {
      return data.dagar[0].namnsdag.join(', ')
  }, api.errHandler)
  .catch(console.error)

// Get weather forecast
const apiParams = {
  apiUrl: 'http://api.openweathermap.org/data/2.5/forecast',
  apiKey: process.env.WEATHER_KEY,
  coords: {
    lat: 59.3833,
    lon: 17.8333
  }
}
const weatherRequestUrl = weatherController.createRequestUrl(apiParams)
const getWeather = api.getData(weatherRequestUrl)
  .then(JSON.parse, api.errHandler)
  .then((result) => {
      return weatherController.filterData(result)
  }, api.errHandler)
  .catch(console.error)

router.get('/', function (req, res) {
  Promise.all([getWeather, getTodaysName])
  .then(([weatherData, todaysNameData]) => {
    return res.render('index', {
      title: 'MM10K', 
      weatherData: weatherData,
      todaysNames: todaysNameData
    })
  });
})

router.get('/weather', weatherController.homePage);

module.exports = router;