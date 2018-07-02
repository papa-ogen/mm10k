const test = require('tape');
const wc = require('../../controllers/weatherController')

test('should translate weather type', function (t) {
  t.plan(12)

  const weatherTypes = ['clear', 'clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist', 'clear']
  const expectedWeatherTypes = ['klart', 'klart', 'lite molnigt', 'molnigt', 'mulet', 'molnigt', 'täta regnskurar', 'regn', 'åskregn', 'snöfall', 'dimma', 'klart']

  weatherTypes.forEach((type, index) => {
    t.equal(wc.translateWeatherType(type), expectedWeatherTypes[index])
  })

  test('should return same value in lowercase', function (t) {
    t.plan(1)

    const givenValue = 'Didde'
    const expectedValue = 'didde'

    t.equal(wc.translateWeatherType(givenValue), expectedValue)
  })

  test('should return current day in Swedish', function (t) {
    t.plan(7)

    const weekDays = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']

    weekDays.forEach((day, index) => {
      t.equal(wc.getWeatherDay(index), weekDays[index])
    })
  })

  test('should return CSS class for icon', function(t) {
    t.plan(18)

    const iconCodes = ['01d', '01n', '02d', '02n', '03d', '03n', '04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n']
    const cssClass = ['sun', 'sun', 'clouds', 'clouds', 'clouds', 'clouds', 'broken-cloud', 'broken-cloud', 'rainy-2', 'rainy-2', 'rain', 'rain', 'thunder', 'thunder', 'snow', 'snow', 'mm-weather-icon-mist', 'mm-weather-icon-mist']

    iconCodes.forEach((code, index) => {
      t.equal(wc.getIconCssClass(code), cssClass[index])
    })
  })

  test('should return default CSS class for icon', function(t) {
    t.plan(1)

    const givenValue = 'Didde'
    const expectedValue = 'sun'

    t.equal(wc.getIconCssClass(givenValue), expectedValue)
  })

  test('should return monday from date string', function(t) {
    t.plan(1)

    const givenDateString = '2018-07-02 21:00:00'
    const expectedWeekDay = 1

    t.equal(wc.getWeekDay(givenDateString), expectedWeekDay)
  })
});