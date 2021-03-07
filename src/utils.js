/**
 * set new date with income date Object to sunday date Object
 * @param {Object} date - a new date Object
 * @returns {Object} new date Object setted with day 0(sunday)
*/

export const makeSundayDate = (date) => {
  const todayDay = date.getDay();
  const todayDate = date.getDate();

  date.setDate(todayDate - todayDay);

  return date;
}

/**
 * set date before 7 days before
 * @param {Object} dateObj - today's date Object
 * @param {number} date - today's date number
 * @returns {Object} new date Object setted 7 days before
 */

export const setLastWeek = (dateObj, date) => {
  return dateObj.setDate(date - 7);
}

/**
 * set date 7 days after
 * @param {Object} dateObj - today's date Object
 * @param {number} date - today's date number
 * @returns {Object} new date Object setted 7 days after
 */

export const setNextWeek = (dateObj, date) => {
  dateObj.setDate(date + 7);
}

/**
 * make full date and start time string Date
 * @param {number} year - today's year in number
 * @param {number} month - today's month in number
 * @param {number} startDate - today's startDate in number
 * @param {number} time - today's startTime in number
 * @returns {string} string with fulldate and starting time
 */

export const makeWeekFullDate = (year, month, startDate, time) => {
  return `${year}-${month + 1}-${startDate - 1}-${time}`;
}

export const makeDailyFullDate = (year, month, startDate, time) => {
  return `${year}-${month + 1}-${startDate}-${time}`;
}

/**
 * check if it is scheduled <div> element or not
 * @param {number} time - time in timetable from 1 to 24
 * @param {number} startTime - start time of store's scchedule info
 * @param {number} endTime - end time of store's schedule info
 * @param {string} eventDay - date of the year month day start time in string
 * @param {string} currentDate - date without starting time in string
 * @return {boolean} returns boolean if it is schedule <div> element or not
 */

export const isEventScheduled = (time, startTime, endTime, eventDay, currentDate) => {
  if ((time >= startTime && time < endTime) &&
    (eventDay === currentDate)) {
      return true;
    }

  return false;
}

/**
 * reduce year month day start time date to without start time date
 * @param {string} fullDate - year month day start time string
 * @returns fullDate without start time
 */

export const dateWithOutStartTime = (fullDate) => {
  const date = fullDate.split('-').reduce((acc, item, index) => {
    if (index === fullDate.split('-').length - 1) return acc;

    return acc + item;
  }, '');

  return date;
}
