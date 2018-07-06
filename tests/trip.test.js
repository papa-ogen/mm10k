const test = require('tape')
const tc = require('../controllers/tripController')
const tripData = require('../data/trip_data_9286')

test('Trip: should create request URL', (t) => {
  t.plan(1)

  const givenParams = {
    apiUrl: 'http://api.sl.se/api2/realtimedeparturesV4.json',
    apiKey: 'abc123',
    siteId: 123456,
  }
  const expectedUrl = 'http://api.sl.se/api2/realtimedeparturesV4.json?key=abc123&siteid=123456'

  t.equal(tc.createRequestUrl(givenParams), expectedUrl, 'URLs missmatch!')
})

test('Trip: should create a filtered bundle of METRO trips', (t) => {
  t.plan(1)

  const givenTrips = tripData.givenTripData.ResponseData.Metros
  const expectedTrips = tripData.expectedFilteredTrip

  t.deepEquals(tc.filterTrips(givenTrips), expectedTrips, 'Trips doesnt match given object')
})

test('Trip: should merge allowed trip types into one array', (t) => {
  t.plan(1)

  const givenTrips = tripData.givenTripData.ResponseData
  const expectedTrips = tripData.expectedTripData

  t.deepEquals(tc.mergeTripTypes(givenTrips), expectedTrips, 'Merged objects doesnt match given object')
})

// test('should return filtered list of data from api call', (t) => {
//   t.plan(1)
// })
