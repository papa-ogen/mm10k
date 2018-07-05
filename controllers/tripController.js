const request = require('request')

const filterData = (data) => {
  const trips = data.TripList.Trip
  let reducedTrip = []
  const concTrips = []

  trips.map((trip) => {
    trip.LegList.Leg.map((list) => {
      if (list.type !== 'WALK') {
        const { name, type } = list
        const { time, date } = list.Origin
        const dir = list.Destination.name

        reducedTrip.push({
          name, type, time, date, dir,
        })
      }
    })

    concTrips.push({
      origin: 'Galaxgränd 22',
      destination: 'T-Centralen',
      dur: trip.dur,
      trip: reducedTrip,
    })

    reducedTrip = []
  })

  return concTrips
}

// const apiUrl = 'https://api.sl.se/api2/TravelplannerV2/trip.json'
// const originCoordLat = 59.3833
// const originCoordLong = 17.8333
// const originCoordName = 'Tellus'
// const destCoordLat = '59,3308'
// const destCoordLong = '18,0631'
// const destCoordName = 'T-centralen'

exports.createRequestUrl = ({
  apiUrl,
  apiKey,
  originCoordLat, originCoordLong, originCoordName, destCoordLat, destCoordLong, destCoordName,
}) => `${apiUrl}?key=${apiKey}&originCoordLat=${originCoordLat}&originCoordLong=${originCoordLong}&originCoordName=${originCoordName}&destCoordLat=${destCoordLat}&destCoordLong=${destCoordLong}&destCoordName=${destCoordName}`

// exports.getTrips = () => {
//   request(`${apiUrl}?key=${process.env.TRAFIKLAB_KEY}&originCoordLat=${originCoordLat}&originCoordLong=${originCoordLong}&originCoordName=${originCoordName}&destCoordLat=${destCoordLat}&destCoordLong=${destCoordLong}&destCoordName=${destCoordName}`, (error, response) => {
//     if (!error && response.statusCode === 200) {
//       return filterData(JSON.parse(response.body))
//     }

//     return error
//   })
// }

exports.homePage = (req, res) => {
  request(`${apiUrl}?key=${process.env.TRAFIKLAB_KEY}&originCoordLat=${originCoordLat}&originCoordLong=${originCoordLong}&originCoordName=${originCoordName}&destCoordLat=${destCoordLat}&destCoordLong=${destCoordLong}&destCoordName=${destCoordName}`, (error, response) => {
    if (!error && response.statusCode === 200) {
      res.render('commuteModule',
        {
          title: 'Magic Mirror',
          trips: filterData(JSON.parse(response.body)),
        })
    }
  })
}
