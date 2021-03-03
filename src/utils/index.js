export const getTwoDigitsString = (number) => {
  if (number < 10) return "0" + number;
  return "" + number;
}

export const getDatesForMonthly = (year, month) => {
  const dates = [];
  const realMonth = month - 1;
  const startDate = 1 - new Date(year, realMonth).getDay();
  const DAYLYCOLUMN = 35;

  for (let i = 0; i < DAYLYCOLUMN; i++) {
    dates.push(new Date(year, realMonth, startDate + i));
  }

  return dates;
}

export const getFullDateToString = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = getTwoDigitsString(dateObj.getMonth() + 1);
  const date = getTwoDigitsString(dateObj.getDate());

  return `${year}-${month}-${date}`;
}

export const getDatesForWeekly = (year, month, date) => {
  const dates = [];
  const realMonth = month - 1;
  const startDate = date - new Date(year, realMonth, date).getDay();
  const WEEKLYCOLUMN = 7;

  for (let i = 0; i < WEEKLYCOLUMN; i++) {
    dates.push(new Date(year, realMonth, startDate + i));
  }

  return dates;
}
