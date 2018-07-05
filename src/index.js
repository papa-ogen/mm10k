const express = require('express')
const router = express.Router()
const weather = require('./weather')
const todaysNames = require('./todaysName')

// Get todays name
const getTodaysName = todaysNames.get()

// Get weather forecast
let getWeather
if (!process.env.WEATHER_KEY) {
  getWeather = Promise.resolve({})
} else {
  getWeather = weather.getWeather()
}

router.get('/', (req, res) => {
  Promise.all([getWeather, getTodaysName])
    .then(([weatherData, todaysNamesData]) => res.render('index', {
      title: 'MM10K',
      weatherData,
      todaysNames: todaysNamesData,
    }))
})

router.get('/weather', weather.weatherController)

module.exports = router
