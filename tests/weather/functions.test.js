const test = require('tape');
const weatherController = require('../../controllers/weatherController')

test('should translate weather type', function (t) {
  t.plan(12)

  const weatherTypes = ["clear", "clear sky", "few clouds", 'scattered clouds', 'broken clouds', 'clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist', 'clear']
  const expectedWeatherTypes = ['klart', 'klart', 'lite molnigt', 'molnigt', 'mulet', 'molnigt', 'täta regnskurar', 'regn', 'åskregn', 'snöfall', 'dimma', 'klart']

  weatherTypes.forEach((type, index) => {
    t.equal(weatherController.translateWeatherType(type), expectedWeatherTypes[index])
  })

  test('should return same value in lowercase', function (t) {
    t.plan(1)

    const givenValue = 'Didde'
    const expectedValue = 'didde'

    t.equal(weatherController.translateWeatherType(givenValue), expectedValue)
  })
});