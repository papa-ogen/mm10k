const ALLOWED_TRIP_TYPES = ['Metros', 'Buses', 'Trains']

const prettifyTimestamp = timestamp => timestamp.substr(timestamp.length - 8, 5)

exports.prettifyTimestamp = prettifyTimestamp

const convertTransportMode = (mode) => {
  switch (mode) {
    case 'BUS':
      return 'Buss'
    case 'TRAIN':
      return 'Tåg'
    case 'METRO':
      return 'Tunnelbana'
    default:
      return 'Linje'
  }
}

exports.convertTransportMode = convertTransportMode

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
  TransportMode: convertTransportMode(TransportMode),
  LineNumber,
  Destination,
  StopAreaName,
  TimeTabledDateTime: prettifyTimestamp(TimeTabledDateTime),
  ExpectedDateTime: prettifyTimestamp(ExpectedDateTime),
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
