const test = require('tape')
const wc = require('../controllers/weatherController')
const weatherData = require('../data/weather_data')

test('should translate weather type', (t) => {
  t.plan(12)

  const weatherTypes = ['clear', 'clear sky', 'few clouds', 'scattered clouds', 'broken clouds', 'clouds', 'shower rain', 'rain', 'thunderstorm', 'snow', 'mist', 'clear']
  const expectedWeatherTypes = ['klart', 'klart', 'lite molnigt', 'molnigt', 'mulet', 'molnigt', 'täta regnskurar', 'regn', 'åskregn', 'snöfall', 'dimma', 'klart']

  weatherTypes.forEach((type, index) => {
    t.equal(wc.translateWeatherType(type), expectedWeatherTypes[index])
  })
})

test('should return same value in lowercase', (t) => {
  t.plan(1)

  const givenValue = 'Didde'
  const expectedValue = 'klart'

  t.equal(wc.translateWeatherType(givenValue), expectedValue)
})

test('should return current day in Swedish', (t) => {
  t.plan(7)

  const weekDays = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']

  weekDays.forEach((day, index) => {
    t.equal(wc.getWeekDayAsString(index), weekDays[index])
  })
})

test('should return CSS class for icon', (t) => {
  t.plan(18)

  const iconCodes = ['01d', '01n', '02d', '02n', '03d', '03n', '04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n']
  const cssClass = ['sun', 'sun', 'clouds', 'clouds', 'clouds', 'clouds', 'broken-cloud', 'broken-cloud', 'rainy-2', 'rainy-2', 'rain', 'rain', 'thunder', 'thunder', 'snow', 'snow', 'mm-weather-icon-mist', 'mm-weather-icon-mist']

  iconCodes.forEach((code, index) => {
    t.equal(wc.getIconCssClass(code), cssClass[index])
  })
})

test('should return default CSS class for icon', (t) => {
  t.plan(1)

  const givenValue = 'Didde'
  const expectedValue = 'sun'

  t.equal(wc.getIconCssClass(givenValue), expectedValue)
})

test('should return monday from date string', (t) => {
  t.plan(1)

  const givenDateString = '2018-07-02 21:00:00'
  const expectedWeekDay = 1

  t.equal(wc.getWeekDayNumber(givenDateString), expectedWeekDay)
})

test('should return sunday if empty date string', (t) => {
  t.plan(1)

  const givenDateString = ''
  const expectedWeekDay = 0

  t.equal(wc.getWeekDayNumber(givenDateString), expectedWeekDay)
})

test('should convert Kelvin to Celsius', (t) => {
  t.plan(1)

  const givenTemp = 289.96
  const expectedTemp = 16.8

  t.equal(wc.convertKelvinToCelcius(givenTemp), expectedTemp)
})

test('should return a new weatherColumn object from a listRow', (t) => {
  t.plan(1)

  const givenListRow = {
    dt: 1530597600,
    main: {
      temp: 289.96,
      temp_min: 288.974,
      temp_max: 289.96,
      pressure: 1022.26,
      sea_level: 1024.75,
      grnd_level: 1022.26,
      humidity: 65,
      temp_kf: 0.99,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d',
      },
    ],
    clouds: {
      all: 64,
    },
    wind: {
      speed: 3.31,
      deg: 340.501,
    },
    sys: {
      pod: 'd',
    },
    dt_txt: '2018-07-03 06:00:00',
  }
  const expectedWeatherColumn = {
    weekDay: 'Tisdag',
    temp: 16.8,
    type: 'broken-cloud',
    descr: 'molnigt',
  }

  t.deepEquals(wc.createWeatherColumn(givenListRow), expectedWeatherColumn)
})

test('should return weather forecast object with 3 items', (t) => {
  t.plan(1)

  const givenWeatherData = weatherData.weatherData.list
  const expectedWeatherData = [
    {
      weekDay: 'Tisdag', temp: 16.8, type: 'broken-cloud', descr: 'molnigt',
    },
    {
      weekDay: 'Onsdag', temp: 16.9, type: 'clouds', descr: 'molnigt',
    },
    {
      weekDay: 'Torsdag', temp: 15.7, type: 'rain', descr: 'regn',
    }]

  t.deepEquals(wc.createWeatherForecast(givenWeatherData), expectedWeatherData)
})

test('should create request URL', (t) => {
  t.plan(1)

  const givenParams = {
    apiUrl: 'http://api.openweathermap.org/data/2.5/forecast',
    apiKey: '123abc',
    coords: {
      lat: 59.3833,
      lon: 17.8333,
    },
  }
  const expectedUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=59.3833&lon=17.8333&appid=123abc'

  t.equal(wc.createRequestUrl(givenParams), expectedUrl)
})
