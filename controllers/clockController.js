const getWeekDayAsString = weekDayNumber => {
  switch (weekDayNumber) {
    case 0: return "Söndag";
    case 1: return "Måndag";
    case 2: return "Tisdag";
    case 3: return "Onsdag";
    case 4: return "Torsdag";
    case 5: return "Fredag";
    case 6: return "Lördag";
  }
}

const getMonthAsString = monthNumber => {
  switch (monthNumber) {
    case 0: return "Januari";
    case 1: return "Februari";
    case 2: return "Mars";
    case 3: return "April";
    case 4: return "Maj";
    case 5: return "Juni";
    case 6: return "Juli";
    case 7: return "Augusti";
    case 8: return "September";
    case 9: return "Oktober";
    case 10: return "November";
    case 11: return "December";
  }
}

exports.getCurrentTime = function (givenTime) {
  const d = !givenTime ? new Date() : new Date(givenTime)
  const hour = d.getUTCHours()
  const minute = d.getMinutes()
  const seconds = d.getSeconds()
  const day = getWeekDayAsString(d.getDay())
  const month = getMonthAsString(d.getMonth())
  const date = d.getDate()
  const year = parseInt(d.getFullYear().toString().substr(-2))

  return {
    hour,
    minute,
    seconds,
    day,
    month,
    date,
    year
  }
}