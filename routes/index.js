const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const request = require('request');

const givenParams = {
  apiUrl: 'http://api.openweathermap.org/data/2.5/forecast',
  apiKey: process.env.WEATHER_KEY,
  coords: {
    lat: 59.3833,
    lon: 17.8333
  }
}
const requestUrl = weatherController.createRequestUrl(givenParams)

router.get('/', function (req, res) {
  request(requestUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('index', { 
        title: "MM10K", 
        weatherData: weatherController.filterData(JSON.parse(response.body)) 
      })
    } else {
      console.log(error, response)
    }
    })
})

router.get('/weather', weatherController.homePage);

module.exports = router;