export function destructDate(option) {
  let date

  if (option) {
    date = new Date(option);
  } else {
    date = new Date();
  }

  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
  }
}

export function getNextDay(currentDate, dayCount) {
  return destructDate(
    new Date(currentDate)
      .setDate(currentDate.getDate() + dayCount)
  );
}

export function getDateSIOType({ month,date, year }) {
  return new Date(`${month} ${date} ${year}`);
}

export function getWeekData(date) {
  const currentDate = getDateSIOType(date);

  const before3Days = getNextDay(currentDate, -3);
  const before2Days = getNextDay(currentDate, -2);
  const beforeDay = getNextDay(currentDate, -1);
  const afterDay = getNextDay(currentDate, 1);
  const after2Days = getNextDay(currentDate, 2);
  const after3Days = getNextDay(currentDate, 3);

  return [
    before3Days,
    before2Days,
    beforeDay,
    destructDate(currentDate),
    afterDay,
    after2Days,
    after3Days,
  ];
}
