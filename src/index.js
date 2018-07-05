const express = require('express');
const router = express.Router();
const api = require('./api');
const weather = require('./weather');
const todaysNames = require('./todaysName');

// Get todays name
const getTodaysName = todaysNames.get();

// Get weather forecast
let getWeather = undefined
if(!process.env.WEATHER_KEY) {
  getWeather = Promise.resolve({});
} else {
  getWeather = weather.getWeather();
}

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

router.get('/weather', weather.weatherController);

module.exports = router;