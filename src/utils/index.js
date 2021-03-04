export const getTwoDigitsString = (number) => {
  if (number < 10) return "0" + number;
  return "" + number;
}

export const getDatesForMonthly = (year, month) => {
  const dates = [];
  const mutatedMonth = month - 1;
  const startDate = 1 - new Date(year, mutatedMonth).getDay();
  const DAYLYCOLUMN = 35;

  for (let i = 0; i < DAYLYCOLUMN; i++) {
    dates.push(new Date(year, mutatedMonth, startDate + i));
  }

  return dates;
}

export const getDatesForWeekly = (year, month, date) => {
  const dates = [];
  const mutatedMonth = month - 1;
  const startDate = date - new Date(year, mutatedMonth, date).getDay();
  const WEEKLYCOLUMN = 7;

  for (let i = 0; i < WEEKLYCOLUMN; i++) {
    dates.push(new Date(year, mutatedMonth, startDate + i));
  }

  return dates;
}

export const getFullDateToString = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = getTwoDigitsString(dateObj.getMonth() + 1);
  const date = getTwoDigitsString(dateObj.getDate());
  const hour = getTwoDigitsString(dateObj.getHours());
  const minute = getTwoDigitsString(dateObj.getMinutes());
  const second = getTwoDigitsString(dateObj.getSeconds());

  return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
}

export const getFromStringDateTo = {
  year: (stringDate) => new Date(stringDate).getFullYear(),
  month: (stringDate) => new Date(stringDate).getMonth() + 1,
  date: (stringDate) => new Date(stringDate).getDate(),
  day: (stringDate) => new Date(stringDate).getDay(),
  hour: (stringDate) => new Date(stringDate).getHours(),
};

export const getDateISOstring = (year, month, date, hour) => {
  const mutatedMonth = month - 1;
  return new Date(year, mutatedMonth, date, hour).toISOString();
};
