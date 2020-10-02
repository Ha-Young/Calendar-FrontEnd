const checkLeapYear = thisYear => {
  if (thisYear % 4 === 0 && thisYear % 100 !== 0 && thisYear % 400 !== 0) return 29;
  return 28;
};
const getStartDayOfWeek = dateInstance => {
  const dateObj = {
    year: dateInstance.getFullYear(),
    month: dateInstance.getMonth(),
    date: dateInstance.getDate(),
    day: dateInstance.getDay(),
  };
  const feburary = checkLeapYear(dateObj.year);
  const monthDays = [ 31, feburary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  const startDateOfWeek =  dateObj.date - dateObj.day;
  const weekDates = [];
  let betweenState;

  if (startDateOfWeek <= 0) {
    const absoluteValue = Math.abs(startDateOfWeek);

    for (let i = absoluteValue; i >= 0; i--) {
      if (betweenState === undefined) betweenState = -1;
      weekDates.push(monthDays[ dateObj.month - 1 ] - i);
    }
    for (let j = 1; j < (7 - absoluteValue); j++) weekDates.push(j);

    return {
      ...dateObj,
      week: 1,
      weekDates: weekDates,
      betweenState: betweenState,
    };
  }

  if (startDateOfWeek + 6 > monthDays[ dateObj.month ]) {
    for (let i = startDateOfWeek; i < monthDays[ dateObj.month ] + 1; i++) weekDates.push(i);
    for (let j = 1; j < (7 - dateObj.day); j++) {
      if (betweenState === undefined) betweenState = 1;
      weekDates.push(j);
    }

    return {
      ...dateObj,
      week: 0,
      weekDates: weekDates,
      betweenState: betweenState,
    };
  }
  for (let i = startDateOfWeek; i < startDateOfWeek + 7; i++) weekDates.push(i);

  return {
    ...dateObj,
    week: Math.floor(startDateOfWeek / 7) + 2,
    weekDates: weekDates,
    betweenState: betweenState,
  };
};

export default getStartDayOfWeek;
