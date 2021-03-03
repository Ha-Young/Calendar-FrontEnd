export const getTwoDigitsString = (number) => {
  if (number < 10) return "0" + number;
  return "" + number;
}

export const getDatesFor35Columns = (year, month) => {
  const dates = [];
  const realMonth = month - 1;
  let startDate = 1 - new Date(year, realMonth).getDay();

  for (let i = 0; i < 35; i++) {
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
