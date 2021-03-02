import moment from "moment";

const HOUR = 24;
const WEEK = 7;

export function getHourList() {
  return Array.from({length: HOUR}, (v, i) => i);
}

export function getWeekList() {
  return Array.from({length: WEEK}, (v, i) => i);
}

export function getDays(date) {
  return date.format("D");
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
  }
}
