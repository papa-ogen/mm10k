const express = require('express')
const router = express.Router()
const weather = require('./weather')
const todaysNames = require('./todaysName')
const trips = require('./trips')

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

router.get('/trips', (req, res) => {
  trips.getTrips()
    .then((tripData) => {
      res.json(tripData)
    })
})

router.get('/gettripsiteid/:searchstring', (req, res) => {
  trips.getTripSiteId(req.params.searchstring)
    .then((tripData) => {
      res.json(tripData)
    })
})

module.exports = router
