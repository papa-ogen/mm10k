const test = require('tape');
const clock = require('../../controllers/clockController')

test('should create clock object', function (t) {
  t.plan(1)
  
  const givenTime = '2018-07-04T12:33:36'
  const expectedClockObject = {
    hour: 12,
    minute: 33,
    seconds: 36,
    day: 'Onsdag',
    month: 'Juli',
    date: 4,
    year: 18
  }

  t.deepEquals(clock.getCurrentTime(givenTime), expectedClockObject)
})