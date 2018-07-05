const request = require('request')

exports.getWeather = () => ({
  location: 'Skälby',
  weathers: [
    {
      date: 'Måndag',
      temp: '12.7',
      type: 'clouds',
      descr: 'molnigt',
    }, {
      date: 'Tisdag',
      temp: '10.3',
      type: 'broken-cloud',
      descr: 'blandade moln',
    }, {
      date: 'Onsdag',
      temp: '12.5',
      type: 'rain',
      descr: 'regn',
    }],
})

const getIconCssClass = (iconCode) => {
  switch (iconCode) {
    case '01d':
    case '01n':
      return 'sun'
    case '02d':
    case '02n':
      return 'clouds'
    case '03d':
    case '03n':
      return 'clouds'
    case '04d':
    case '04n':
      return 'broken-cloud'
    case '09d':
    case '09n':
      return 'rainy-2'
    case '10d':
    case '10n':
      return 'rain'
    case '11d':
    case '11n':
      return 'thunder'
    case '13d':
    case '13n':
      return 'snow'
    case '50d':
    case '50n':
      return 'mm-weather-icon-mist'
    default:
      return 'sun'
  }
}

exports.getIconCssClass = getIconCssClass

const translateWeatherType = (type) => {
  switch (type.toLowerCase()) {
    default:
    case 'clear':
    case 'clear sky': return 'klart'
    case 'few clouds': return 'lite molnigt'
    case 'scattered clouds': return 'molnigt'
    case 'broken clouds': return 'mulet'
    case 'clouds': return 'molnigt'
    case 'shower rain': return 'täta regnskurar'
    case 'rain': return 'regn'
    case 'thunderstorm': return 'åskregn'
    case 'snow': return 'snöfall'
    case 'mist': return 'dimma'
  }
}

exports.translateWeatherType = translateWeatherType

const getWeekDayAsString = (weekDayNumber) => {
  switch (weekDayNumber) {
    default:
    case 0: return 'Söndag'
    case 1: return 'Måndag'
    case 2: return 'Tisdag'
    case 3: return 'Onsdag'
    case 4: return 'Torsdag'
    case 5: return 'Fredag'
    case 6: return 'Lördag'
  }
}

exports.getWeekDayAsString = getWeekDayAsString

const getWeekDayNumber = (dateStr) => {
  const d = dateStr.length ? dateStr.replace(/\s/g, 'T') : 0

  return d ? new Date(d).getDay() : 0
}

exports.getWeekDayNumber = getWeekDayNumber

const convertKelvinToCelcius = temp => parseFloat((temp - 273.15).toFixed(1))

exports.convertKelvinToCelcius = convertKelvinToCelcius

const createWeatherColumn = (listRow) => {
  const weekDay = getWeekDayAsString(getWeekDayNumber(listRow.dt_txt))
  const temp = convertKelvinToCelcius(listRow.main.temp)
  const type = getIconCssClass(listRow.weather[0].icon)
  const descr = translateWeatherType(listRow.weather[0].main)
  return {
    weekDay,
    temp,
    type,
    descr,
  }
}

exports.createWeatherColumn = createWeatherColumn

const createWeatherForecast = listData => listData.filter((listRow, index) => index % 8 === 0)
  .map(listRow => createWeatherColumn(listRow))
  .slice(0, 3)

exports.createWeatherForecast = createWeatherForecast

const filterData = data => ({
  location: 'Skälby',
  weathers: createWeatherForecast(data.list),
})

exports.filterData = filterData

const createRequestUrl = ({ apiUrl, apiKey, coords }) => `${apiUrl}?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`

exports.createRequestUrl = createRequestUrl

exports.homePage = (req, res) => {
  const apiParams = {
    apiUrl: 'http://api.openweathermap.org/data/2.5/forecast',
    apiKey: process.env.WEATHER_KEY,
    coords: {
      lat: 59.3833,
      lon: 17.8333,
    },
  }

  const requestUrl = createRequestUrl(apiParams)

  request(requestUrl, (error, response) => {
    if (!error && response.statusCode === 200) {
      res.render('weather',
        {
          title: 'Magic Mirror',
          weatherData: filterData(JSON.parse(response.body)),
        })
    }
  })
}
