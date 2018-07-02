const test = require('tape');
const weatherController = require('../../controllers/weatherController')

test('Translate weather type', function (t) {
  t.plan(12)

  const weatherTypes = ["clear", "clear sky"]
  const expectedWeatherTypes = ['klart', 'klart']

  weatherTypes.forEach((type, index) => {
    t.equal(weatherController.weatherType(type), expectedWeatherTypes[index])
  })
});