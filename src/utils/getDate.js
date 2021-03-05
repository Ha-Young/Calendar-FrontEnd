import { MONTH, WEEK } from "../constants/time";

export function getISOString(date) {
  const newDate = date ? new Date(date) : new Date();

  return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
}

export function getCurrentDate(date) {
  const currentDate = new Date(date);

  return `${MONTH[currentDate.getMonth()]} ${currentDate.getDate()}. ${currentDate.getFullYear()}`;
}

export function getCurrentDay(date) {
  const currentDate = new Date(date);

  return {
    string: WEEK[currentDate.getDay()],
    number: currentDate.getDate(),
    id: getISOString(currentDate),
  };
}

export function getCurrentWeek(date) {
  const currentDate = new Date(date);
  const week = [];

  for (let i = 0; i <= 6; i++) {
    const first = currentDate.getDate() - currentDate.getDay() + i;
    const day = new Date(currentDate.setDate(first));
    week.push(day);
  }

  return week.map(day => getCurrentDay(day));
}

export function getYesterday(date) {
  const today = new Date(date);

  today.setDate(today.getDate() - 1);

  return getISOString(today);
}

export function getTomorrow(date) {
  const today = new Date(date);

  today.setDate(today.getDate() + 1);

  return getISOString(today);
}

export function getLastWeek(date) {
  const today = new Date(date);

  today.setDate(today.getDate() - 7);

  return getISOString(today);
}

export function getNextWeek(date) {
  const today = new Date(date);

  today.setDate(today.getDate() + 7);

  return getISOString(today);
}