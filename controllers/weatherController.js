const request = require('request');

exports.getWeather = () => {
  return {
    "location": "Skälby",
    "weathers": [
      {
        "date": "Måndag",
        "temp": "12.7",
        "type": "clouds",
        "descr": "molnigt"
      }, {
        "date": "Tisdag",
        "temp": "10.3",
        "type": "broken-cloud",
        "descr": "blandade moln"
      }, {
        "date": "Onsdag",
        "temp": "12.5",
        "type": "rain",
        "descr": "regn"
      }]
  };
}

function weatherIconClass(iconCode) {
  switch (iconCode) {
    case "01d":
    case "01n":
      return "sun";
    case "02d":
    case "02n":
      return "clouds";
    case "03d":
    case "03n":
      return "clouds";
    case "04d":
    case "04n":
      return "broken-cloud";
    case "09d":
    case "09n":
      return "rainy-2";
    case "10d":
    case "10n":
      return "rain";
    case "11d":
    case "11n":
      return "thunder";
    case "13d":
    case "13n":
      return "snow";
    case "50d":
    case "50n":
      return "mm-weather-icon-mist";
    default:
      return "sun";
  }
};

exports.weatherType = (type) => {
  let _type = type.toLowerCase();
  switch (_type) {
    case "clear":
    case "clear sky": return "klart";
    case "few clouds": return "lite molnigt";
    case "scattered clouds": return "molnigt";
    case "broken clouds": return "mulet";
    case "clouds": return "molnigt";
    case "shower rain": return "täta regnskurar";
    case "rain": return "regn";
    case "thunderstorm": return "åskregn";
    case "snow": return "snöfall";
    case "mist": return "dimma";
    case "clear": return "klart";
    default:
      return _type;
  }
};

function getWeatherDay(day) {
  switch (day) {
    case 0: return "Söndag";
    case 1: return "Måndag";
    case 2: return "Tisdag";
    case 3: return "Onsdag";
    case 4: return "Torsdag";
    case 5: return "Fredag";
    case 6: return "Lördag";
  }
}

function getTime(data) {
  let d = data !== "undefined" ? data.replace(/\s/g, "T") : "";
  let day;

  if (d.length > 0) {
    day = new Date(d).getDay();
    return getWeatherDay(day);
  }

  return 0;
}

const filterData = (data) => {
  const weathers = [];
  let _weather = [];

  data.list.forEach(function (w, index) {
    if(weathers.length >= 3) return;

    if (index % 8 === 0) {
      _weather = {
        "date": getTime(w.dt_txt),
        "temp": (w.main.temp - 273.15).toFixed(1),
        "type": weatherIconClass(w.weather[0].icon),
        "descr": weatherType(w.weather[0].main)
      }

      weathers.push(_weather);
    }
  });

  return {
    "location": "Skälby",
    "weathers": weathers
  }
}

exports.homePage = (req, res) => {
  const forecast = true;
  const apiUrl = forecast ? 'http://api.openweathermap.org/data/2.5/forecast' : 'http://api.openweathermap.org/data/2.5/weather';
  const lat = '59.3833';
  const lon = '17.8333';
  const coordParam = `lat=${lat}&lon=${lon}`;
  const apiKey = `appid=${process.env.WEATHER_KEY}`;
  const apiParams = `${apiUrl}?${coordParam}&${apiKey}`;

  request(apiParams, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      res.render('weatherModule',
        {
          title: 'Magic Mirror',
          weather: filterData(JSON.parse(response.body))
        });
    }
  })
}