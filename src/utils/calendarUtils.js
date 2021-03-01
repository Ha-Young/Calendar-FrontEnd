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

  const firstDayNum = new Date(year, month, 1).getDay();
  const lastDayNum = new Date(year, month, daysOfMonth).getDay();
  return firstDayNum + (6 - lastDayNum) + daysOfMonth;
}
