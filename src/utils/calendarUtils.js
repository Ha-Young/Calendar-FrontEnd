import {
  REGULAR_DAYS_OF_MONTH,
  LEAP_YEAR_DAYS_OF_MONTH
} from "../constants/calendarConstants";

export function checkLeapyear(year) {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

export function getNumberOfWeeksOfMonth(year, month) {
  if (typeof month !== "number") {
    throw new Error("should pass NUMBER");
  }

  const isLeapYear = checkLeapyear(year);
  const daysOfMonth = isLeapYear ? LEAP_YEAR_DAYS_OF_MONTH[month] : REGULAR_DAYS_OF_MONTH[month];

  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const lastDayOfMonth = getLastDayOfMonth(year, month, daysOfMonth);
  return firstDayOfMonth + (6 - lastDayOfMonth) + daysOfMonth;
}

export function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export function getLastDayOfMonth(year, month, daysOfMonth) {
  return new Date(year, month, daysOfMonth).getDay();
}

//day = 요일, date = 날짜
export function getCalendarArray(year, month) {
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const array = [];

  let daysOfCalendarPage = getNumberOfWeeksOfMonth(year, month);


  for (let i = 0; i < daysOfCalendarPage; i++) {
    let row = [];

    const date = new Date(year, month, i - firstDayOfMonth + 1);
    row.push(date.getDate());

    if (i % 7 === 6) {
      array.push(row);
      row = [];
    }
  }

  return array;
}
