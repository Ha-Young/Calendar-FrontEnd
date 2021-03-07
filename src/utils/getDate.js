import { MONTH, WEEK } from "../constants/time";


/**
 *
 * @param {*} date date object return new Date()
 * @returns date text xxxx-xx-xx format
 */
export function getISOString(date) {
  const newDate = date ? new Date(date) : new Date();

  return `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;
}

/**
 *
 * @param {*} date date object return new Date()
 * @returns date text Month Day. Year format
 */
export function getCurrentDate(date) {
  const currentDate = new Date(date);

  return `${MONTH[currentDate.getMonth()]} ${currentDate.getDate()}. ${currentDate.getFullYear()}`;
}


/**
 *
 * @param {*} date date object return new Date()
 * @returns date text xxxx-xx-xx format
 */
export function getCurrentDay(date) {
  const currentDate = new Date(date);

  return {
    letterDate: WEEK[currentDate.getDay()],
    numericDate: currentDate.getDate(),
    id: getISOString(currentDate),
  };
}

/**
 *
 * @param {*} date date object return new Date()
 * @returns array have week information
 */
export function getCurrentWeek(date) {
  const currentDate = new Date(date);
  const week = [];

  for (let i = 0; i <= 6; i++) {
    const first = currentDate.getDate() - currentDate.getDay() + i;
    const day = getCurrentDay(new Date(currentDate.setDate(first)));

    week.push(day);
  }

  return week;
}

/**
 *
 * @param {*} date date object return new Date()
 * @returns date text xxxx-xx-xx format
 */
export function getYesterday(date) {
  const today = new Date(date);

  today.setDate(today.getDate() - 1);

  return getISOString(today);
}

/**
 *
 * @param {*} date date object return new Date()
 * @returns date text xxxx-xx-xx format
 */
export function getTomorrow(date) {
  const today = new Date(date);

  today.setDate(today.getDate() + 1);

  return getISOString(today);
}

/**
 *
 * @param {*} date date object return new Date()
 * @returns date text xxxx-xx-xx format
 */
export function getLastWeek(date) {
  const today = new Date(date);

  today.setDate(today.getDate() - 7);

  return getISOString(today);
}

/**
 *
 * @param {*} date date object return new Date()
 * @returns date text xxxx-xx-xx format
 */
export function getNextWeek(date) {
  const today = new Date(date);

  today.setDate(today.getDate() + 7);

  return getISOString(today);
}
