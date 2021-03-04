import moment from "moment";

export const dayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const getDayStr = count => {
  const newDay = moment().add(count, 'day').format('d');

  return dayName[newDay];
};

export const getDayNum = count => {
  const newDay = moment().add(count, 'day').format('DD');

  return Number(newDay.toString());
};

export const getWeekStr = count => {
  const activeDay = moment().add(count, 'day');
  const week = [];

  for (let i = 0; i < 7; i++) {
    week.push(activeDay.day(i).format('DD'));
  }

  return week;
};

export const getWeek = count => {
  const activeDay = moment().add(count, 'day');
  const week = [];

  for (let i = 0; i < 7; i++) {
    week.push(activeDay.day(i).format('YYYY-MM-DD'));
  }

  return week;
};

export const getMonth = count => {
  const month = moment().add(count, 'day').format('MMMM');

  return month;
};

export const getYear = count => {
  const year = moment().add(count, 'day').format('YYYY');

  return year;
};

export const getDayIso = count => {
  const day = moment().add(count, 'day').format("YYYY-MM-DD");

  return day;
};

export const getDayIndex = count => {
  const newDay = moment().add(count, 'day').format('d');

  return newDay;
};
