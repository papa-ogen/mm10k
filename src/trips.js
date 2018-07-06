const api = require('./api')
const tc = require('../controllers/tripController')

const apiParams = {
  apiUrl: 'http://api.sl.se/api2/realtimedeparturesV4.json',
  apiKey: process.env.TRAFIKLAB_KEY,
  siteId: 5857,
}
const requestUrl = tc.createRequestUrl(apiParams)

exports.getTrips = () => api.getData(requestUrl)
  .then(JSON.parse, api.errHandler)
  .then(result => tc.mergeTripTypes(result.ResponseData), api.errHandler)
  .catch(console.error) /* eslint-disable-line */

const apiSiteIdParams = {
  apiUrl: 'http://api.sl.se/api2/typeahead.json',
  apiKey: process.env.TRAFIKLAB_SITEID_FINDER,
  searchstring: '',
}

exports.getTripSiteId = searchstring => api.getData(tc.createSiteIdRequestUrl(apiSiteIdParams,
  searchstring))
  .then(JSON.parse, api.errHandler)
  .then(result => result, api.errHandler)
  .catch(console.error) /* eslint-disable-line */
