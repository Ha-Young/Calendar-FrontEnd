const DAY_LIST = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function generateToday() {
  return new Date().toISOString().substring(0, 10);
}

function generateDayString(target) {
  return DAY_LIST[new Date(target).getDay()];
}

function stepToDay(target, isPrev) {
  const DAY_STEP = 86400000;
  if (isPrev) {
    return new Date(new Date(target).getTime() - DAY_STEP).toISOString().substring(0, 10);
  }
  return new Date(new Date(target).getTime() + DAY_STEP).toISOString().substring(0, 10);
}

function generateWeekList(target, isPrev) {
  const WEEK_STEP = 691200000;
  let current;

  if (target && isPrev) {
    const selectedTime = new Date(target).getTime();
    const targetTime = new Date(selectedTime - WEEK_STEP).toISOString().substring(0, 10);
    current = new Date(targetTime);
  } else if (target && !isPrev) {
    const selectedTime = new Date(target).getTime();
    const targetTime = new Date(selectedTime + WEEK_STEP).toISOString().substring(0, 10);
    current = new Date(targetTime);
  } else {
    current = new Date();
  }

  const week = [];

  for (let i = 1; i <= 7; i++) {
    const firstDay = current.getDate() - current.getDay() + i;
    const day = new Date(current.setDate(firstDay)).toISOString().slice(0, 10);
    week.push(day);
  }

  return week;
}

export { DAY_LIST, stepToDay, generateToday, generateDayString, generateWeekList }