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
export function generateCalendarArray(year, month) {
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  const calendarArray = [];

  let daysOfCalendarPage = getNumberOfWeeksOfMonth(year, month);
  let row = [];

  for (let i = 0; i < daysOfCalendarPage; i++) {

    const date = new Date(year, month, i - firstDayOfMonth + 1);
    row.push(date.getDate());

    if (i % 7 === 6) {
      calendarArray.push(row);
      row = [];
    }
  }

  return calendarArray;
}

export function generateWeekArray(year, month, date, day) {
  const standardDate = new Date(year, month, date - day);
  const weekArray = [];

  for (let i = 0; i < 7; i++) {
    //console.log(standardDate);
    weekArray.push(standardDate.getDate() + i);
  }

  return weekArray;
}

export function generateDate(year, month) {
  return `${year}년 ${month}월 `;
}
