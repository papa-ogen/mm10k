const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const request = require('request');

// const apiParams = {
//   apiUrl: 'http://api.openweathermap.org/data/2.5/forecast',
//   apiKey: process.env.WEATHER_KEY,
//   coords: {
//     lat: 59.3833,
//     lon: 17.8333
//   }
// }
// const requestUrl = weatherController.createRequestUrl(apiParams)

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

const main = (req, res) => {
  const apiParams = {
    apiUrl: 'http://api.openweathermap.org/data/2.5/forecast',
    apiKey: process.env.WEATHER_KEY,
    coords: {
      lat: 59.3833,
      lon: 17.8333
    }
  }
  const requestUrl = weatherController.createRequestUrl(apiParams)
  getData(requestUrl)
  .then(JSON.parse, errHandler)
  .then((result) => {
      res.render('index', { 
        title: "MM10K", 
        weatherData: weatherController.filterData(result)
      })
      // Do one more async operation here
      // var anotherPromise = getData(userDetails.followers_url).then(JSON.parse);
      // return anotherPromise;
  }, errHandler)
  .catch(console.error)
}

router.get('/', function (req, res) {
  main(req, res)
})

router.get('/weather', weatherController.homePage);

module.exports = router;