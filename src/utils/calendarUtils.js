import {
  REGULAR_DAYS_OF_MONTH,
  LEAP_YEAR_DAYS_OF_MONTH,
  MONTH_LIST
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

export function generateWeekArrayAndMonthArray(date) {
  const weekArray = [];
  const monthArray = [];

  for (let i = 0; i < 7; i++) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const dateNumber = date.getDate();
    const newDate = new Date(year, month, dateNumber - day + i);
    weekArray.push(newDate.getDate());
    monthArray.push(newDate.getMonth() + 1);
  }

  return [weekArray, monthArray];
}

export function generateDateTitle(isWeek, date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dateNumber = date.getDate();
  const day = date.getDay();
  const totalDays = checkLeapyear(year)
    ? LEAP_YEAR_DAYS_OF_MONTH[month]
    : REGULAR_DAYS_OF_MONTH[month];
  const prevMonth = month - 1 < 0 ? MONTH_LIST.length - 1 : month - 1;
  const nextMonth = month + 1 > MONTH_LIST.length - 1 ? 0 : month + 1;

  if (!isWeek) {
    return `${MONTH_LIST[month]} ${dateNumber}, ${year}`;
  }

  if (dateNumber - day < 1) {
    return `${MONTH_LIST[prevMonth]} - ${MONTH_LIST[month]}, ${year}`;
  } else if (dateNumber + 6 - day > totalDays) {
    return `${MONTH_LIST[month]} - ${MONTH_LIST[nextMonth]}, ${year}`;
  }

  return `${MONTH_LIST[month]}, ${year}`;
}

export function generateDateAndTimeString(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const dateNumber = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const time = date.getHours();

  const dateString = `${year}-${month}-${dateNumber}`;
  const startTimeString = `${time > 9 ? time : `0${time}`}:00`;
  const endTimeString = `${time + 1 > 9 ? time + 1 : `0${time + 1}`}:00`;

  return [dateString, startTimeString, endTimeString];
}
