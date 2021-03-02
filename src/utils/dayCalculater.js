import { format, getDaysInMonth } from 'date-fns/esm'

const DAYS_IN_WEEK = 7

// Make a new Date pointing to the same time as `date`
function cloneDate(date) {
  return new Date(date.getTime())
}

// Return an array of Dates, with one date
// for each day in `date`'s month
function getDays(date) {
  let daysInMonth = getDaysInMonth(date)
  let days = []
  for (let index = 1; index <= daysInMonth; index++) {
    days.push(new Date(date.getFullYear(), date.getMonth(), index))
  }
  return days
}

// Get a two-dimensional array of Dates for `date`'s month.
// Each inner array is one week.
// Extra days will be added from other months to make each week complete.
// Pass `0-7` as `firstDayOfWeek` to specify when weeks should begin (values correspond to `Date.getDay()`).
// Pass `true` to `forceSixRows` to make sure each month gets six rows (this is for UI consistency).
function getWeeks(date, { firstDayOfWeek = 0, forceSixRows = false } = {}) {
  let days = getDays(date)
  let daysInMonth = days.length
  let week = []
  let weeks = []

  // build weeks array
  days.forEach(day => {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weeks.push(week)
      week = []
    }
    week.push(day)
    if (days.indexOf(day) === days.length - 1) {
      weeks.push(week)
    }
  })

  // unshift days to start the first week
  const firstWeek = weeks[0]
  for (let index = DAYS_IN_WEEK - firstWeek.length; index > 0; index--) {
    const outsideDate = cloneDate(firstWeek[0])
    outsideDate.setDate(firstWeek[0].getDate() - 1)
    firstWeek.unshift(outsideDate)
    daysInMonth++
  }

  // push days until the end of the last week
  const lastWeek = weeks[weeks.length - 1]
  for (let index = lastWeek.length; index < DAYS_IN_WEEK; index++) {
    const outsideDate = cloneDate(lastWeek[lastWeek.length - 1])
    outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1)
    lastWeek.push(outsideDate)
    daysInMonth++
  }

  // handle six rows if we need to
  if (forceSixRows && daysInMonth < 42) {
    let lastDayOfMonth = weeks[weeks.length - 1][6]
    let lastWeek = []
    let index = 1
    while (daysInMonth < 42) {
      let lastDayOfMonthClone = cloneDate(lastDayOfMonth)
      let day = new Date(
        lastDayOfMonthClone.setDate(lastDayOfMonthClone.getDate() + index),
      )
      if (lastWeek.length > 0 && day.getDay() === firstDayOfWeek) {
        weeks.push(lastWeek)
        lastWeek = []
      }
      lastWeek.push(day)
      daysInMonth++
      index++
    }
    // push last week after finishing loop
    weeks.push(lastWeek)
  }

  return weeks
}

const dayCalculator = () => {
  console.log(getWeeks(new Date()));
  console.log(format(new Date(2014, 1, 11), 'MM/dd/yyyy'));
}

export default dayCalculator;
