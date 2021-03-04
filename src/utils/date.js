const HOUR = 24;
const WEEK = 7;

export function getHourList() {
  return Array.from({length: HOUR}, (v, i) => i);
}

export function getWeekList() {
  return Array.from({length: WEEK}, (v, i) => i - 3);
}

export function getDays(date) {
  return date.format("D");
}

export function calculateDate(date, fromDate) {
  return date.clone().add(fromDate, "days");
}

export function getKeyFormat(date) {
  return date.format("YYYY-MM-DD");
}

export function getWeeklyKeyFormats(date) {
  const tempDate = date.clone().add(-3, "days");
  const result = [];

  for (let i = 0; i < WEEK; i++) {
    result.push(tempDate.format("YYYY-MM-DD"));
    tempDate.add(1, "days");
  }

  return result;
}

export function getDayOfTheWeek(date) {
  switch (date.day()) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
    default:
      throw new Error({message: "getDayOfTheWeek"});
  }
}
