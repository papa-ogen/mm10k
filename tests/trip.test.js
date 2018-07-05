const test = require('tape')
const tc = require('../controllers/tripController')

test('Trip: should create request URL', (t) => {
  t.plan(1)

  const givenParams = {
    apiUrl: 'https://api.sl.se/api2/TravelplannerV2/trip.json',
    apiKey: 'abc123',
    originCoordLat: 59.3833,
    originCoordLong: 17.8333,
    originCoordName: 'Tellus',
    destCoordLat: 59.3308,
    destCoordLong: 18.0631,
    destCoordName: 'T-centralen',
  }
  const expectedUrl = 'https://api.sl.se/api2/TravelplannerV2/trip.json?key=abc123&originCoordLat=59.3833&originCoordLong=17.8333&originCoordName=Tellus&destCoordLat=59.3308&destCoordLong=18.0631&destCoordName=T-centralen'

  t.equal(tc.createRequestUrl(givenParams), expectedUrl)
})

// test('should filter away results of type WALK', (t) => {
//   t.plan(1)

// })

// test('should return filtered list of data from api call', (t) => {
//   t.plan(1)
// })
