export const makeSundayDate = (date) => {
  const todayDay = date.getDay();
  const todayDate = date.getDate();

  date.setDate(todayDate - todayDay);

  return date;
}

export const setLastWeek = (dateObj, date) => {
  dateObj.setDate(date - 7);
}

export const setNextWeek = (dateObj, date) => {
  dateObj.setDate(date + 7);
}

export const makeWeekFullDate = (year, month, startDate, time) => {
  return `${year}-${month + 1}-${startDate - 1}-${time}`;
}

export const makeDailyFullDate = (year, month, startDate, time) => {
  return `${year}-${month + 1}-${startDate}-${time}`;
}

export const isEventScheduled = (time, startTime, endTime, eventDay, currentDate) => {
  if ((time >= startTime && time < endTime) &&
    eventDay === currentDate) {
      return true;
    }

  return false;
}
