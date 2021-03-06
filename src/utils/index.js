export const getDateISOstring = (year, month, date, hour) => {
  const mutatedMonth = month - 1;
  return new Date(year, mutatedMonth, date, hour).toISOString();
};

export const calculateYearMonthWeek = (dateObj) => {
  const currentDate = dateObj.getDate();
  const currentYear = dateObj.getFullYear();
  const currentMonth = dateObj.getMonth();

  const criterionDay = new Date(currentYear, currentMonth, 1).getDay();
  const isFirstWeek = 0 < criterionDay && criterionDay < 5;

  if (!isFirstWeek && currentDate < 4) {
    const month = currentMonth - 1 < 0 ? -12 : currentMonth + 1;
    const year = month < 0 ? currentYear - 1 : currentYear;
    const week = 5;
    return [year, Math.abs(month), week];
  }

  let criterionDate = 1;
  let week = 1;

  while (criterionDate <= 36) {
    if (criterionDate <= currentDate && currentDate < criterionDate + 7) {
      break;
    } else {
      week++;
      criterionDate += 7;
    }
  }

  return [currentYear, currentMonth + 1, week];
};

export const getPathString = (paths) => {
  return paths.reduce((fullPath, path) => `${fullPath}/${path}`);
}
