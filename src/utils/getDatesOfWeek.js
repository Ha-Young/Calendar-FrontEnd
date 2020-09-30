function getStartDayOfWeek(dateObj) {
  const monthDays = [ 31, checkLeapYear(dateObj.year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
  const startDateOfWeek =  dateObj.date - dateObj.day;
  const weekDates = [];

  if (startDateOfWeek <= 0) {
    const absoluteValue = Math.abs(startDateOfWeek);

    for (let i = absoluteValue; i >= 0; i--) {
      weekDates.push(monthDays[ dateObj.month - 2 ] - i);
    }
    for (let j = 1; j < (7 - absoluteValue); j++) {
      weekDates.push(j);
    }

    return {
      weekDates: weekDates,
      week: 1,
    };
  }

  if (startDateOfWeek + 6 > monthDays[ dateObj.month - 1 ]) {
    for (let i = startDateOfWeek; i < monthDays[ dateObj.month - 1 ] + 1; i++) {
      weekDates.push(i);
    }
    for (let j = 1; j < (7 - dateObj.day); j++) {
      weekDates.push(j);
    }

    return {
      weekDates: weekDates,
      week: 0,
    };
  }

  for (let i = startDateOfWeek; i < startDateOfWeek + 7; i++) {
    weekDates.push(i);
  }

  return {
    weekDates: weekDates,
    week: Math.floor(startDateOfWeek / 7) + 2,
  };
}

function checkLeapYear(thisYear) {
  if (thisYear % 4 === 0 && thisYear % 100 !== 0 || thisYear % 400 === 0) return 29;
  return 28;
}

export default getStartDayOfWeek;