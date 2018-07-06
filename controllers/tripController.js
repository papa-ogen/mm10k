const ALLOWED_TRIP_TYPES = ['Metros', 'Buses', 'Trains']

exports.createRequestUrl = ({
  apiUrl,
  apiKey,
  siteId,
}) => `${apiUrl}?key=${apiKey}&siteid=${siteId}`

const filterTrips = tripGroup => tripGroup.map(({
  GroupOfLine,
  DisplayTime,
  TransportMode,
  LineNumber,
  Destination,
  StopAreaName,
  TimeTabledDateTime,
  ExpectedDateTime,
  Deviations,
}) => ({
  GroupOfLine,
  DisplayTime,
  TransportMode,
  LineNumber,
  Destination,
  StopAreaName,
  TimeTabledDateTime,
  ExpectedDateTime,
  Deviations,
}))

exports.filterTrips = filterTrips

exports.mergeTripTypes = (trips) => {
  const mergedTrips = []

  ALLOWED_TRIP_TYPES.forEach((tripType) => {
    if (tripType in trips) {
      mergedTrips.push(...filterTrips(trips[tripType]))
    }
  })

  return mergedTrips
}

exports.createSiteIdRequestUrl = ({
  apiUrl,
  apiKey,
}, searchstring) => `${apiUrl}?key=${apiKey}&searchstring=${searchstring}`
