const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');
const request = require('request');

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

const getTodaysName = (period) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      getData('http://api.dryg.net/dagar/v2.1/')
        .then(JSON.parse, errHandler)
        .then((data) => {
          // resolve(data.dagar[0].namnsdag.join(', '))
          const d = new Date()
          resolve(d.getSeconds())
        })
        .catch((error) => {
          console.error(error)
          clearInterval(interval);
          reject('fail')
       })
    }, period);
  });
};

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
  const weather = getData(requestUrl)
    .then(JSON.parse, errHandler)
    .then((result) => {
        return weatherController.filterData(result)
    }, errHandler)
    .catch(console.error)

  const todaysName = getTodaysName(3000)

  Promise.all([weather, todaysName])
  .then(([weatherData, todaysNameData]) => {
    return res.render('index', {
      title: 'MM10K', 
      weatherData: weatherData,
      todaysNames: todaysNameData
    })
  });
}

router.get('/', function (req, res) {
  main(req, res)
})

router.get('/weather', weatherController.homePage);

module.exports = router;