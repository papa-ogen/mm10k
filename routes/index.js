const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');


router.get('/', function (req, res) {
  res.render('index', { 
    title: "MM10K", 
    weatherData: {"location":"Skälby","weathers":[{"date":"Måndag","temp":"12.7","type":"clouds","descr":"klar himmel"},{"date":"Tisdag","temp":"10.3","type":"broken-cloud","descr":"blandade moln"},{"date":"Onsdag","temp":"12.5","type":"rain","descr":"blandade moln"}]} 
  })
})

router.get('/weather', weatherController.homePage);

module.exports = router;