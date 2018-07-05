const test = require('tape')
const clock = require('../../controllers/clockController')

test('should create clock object', (t) => {
  t.plan(1)

  const givenTime = new Date(2018, 6, 4, 12, 33, 30, 0)
  const expectedClockObject = {
    hour: 12,
    minute: 33,
    date: 'Onsdag, Juli 4',
  }

  t.deepEquals(clock.getCurrentTime(givenTime), expectedClockObject)
})
