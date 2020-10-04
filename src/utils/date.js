const DAY_LIST = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_STEP = 86400000;
const WEEK_STEP = 691200000;

const generateTimeFormat = (value) =>
  (`${value > 9 ? value : '0' + value}:00`);

const generateDay = (target) => {
  const current = target ? new Date(target) : new Date();
  return current.toISOString().substring(0, 10);
};

const generateDayString = (target) => {
  const current = target ? new Date(target) : new Date();
  return DAY_LIST[current.getDay()];
};

const stepToDay = (target, isPrevious) => {
  let step = DAY_STEP;
  if (isPrevious) step *= -1;
  return generateDay(new Date(target).getTime() + step);
};

const generateWeekList = (target, isPrevious) => {
  const week = [];
  let step = WEEK_STEP;
  let current;

  if (target) {
    if (isPrevious) step *= -1;
    const selectedTime = new Date(target).getTime();
    const targetTime = generateDay(selectedTime + step);
    current = new Date(targetTime);
  } else {
    current = new Date();
  }

  for (let i = 1; i <= 7; i++) {
    const firstDay = current.getDate() - current.getDay() + i;
    const day = generateDay(current.setDate(firstDay));
    week.push(day);
  }

  return week;
};

export {
  DAY_LIST,
  stepToDay,
  generateDay,
  generateDayString,
  generateWeekList,
  generateTimeFormat
};
