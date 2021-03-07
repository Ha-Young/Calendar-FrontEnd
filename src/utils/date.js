const HOUR = 24;
const WEEK = 7;

export function getHourList() {
  return Array.from({length: HOUR}, (v, i) => i);
}

export function getWeekList() {
  return Array.from({length: WEEK}, (v, i) => i - 3);
}

export function getDay(date) {
  return date.format("D");
}

export function calculateDate(date, fromDate) {
  return date.clone().add(fromDate, "days");
}

export function getKeyFormat(date, format = "YYYY-MM-DD") {
  return date.format(format);
}

export function getWeeklyKeyFormats(date) {
  const tempDate = date.clone().add(-3, "days");
  const result = [];

  for (let i = 0; i < WEEK; i++) {
    result.push(getKeyFormat(tempDate));
    tempDate.add(1, "days");
  }

  return result;
}

export function getDayOfTheWeek(date) {
  const days = ["일", "월", "화", "수", "목", "금", "토"];

  return days[date.day()];
}
