import moment from "moment";

import { DATE_FORMAT } from "../constants/common";

// Todo. constant로?
const HOUR = 24;
const AM = "AM";
const PM = "PM";
const DAY_OF_THE_WEEK = [
  "월요일", "화요일", "수요일",
  "목요일", "금요일", "토요일", "일요일"
];
const WEEK_CALCULATE_LIST = [-3, -2, -1, 0, 1, 2, 3];

export function getCurrentDateStr(format = DATE_FORMAT) {
  return moment().format(format);
}

export function getCurrentMoment() {
  return moment();
}

export function getCalcDay(date, calcDay) {
  if (calcDay >= 0) {
    return moment(date).add(calcDay, "day").format(DATE_FORMAT);
  }

  return moment(date)
    .subtract(calcDay * -1, "day")
    .format(DATE_FORMAT);
}

export function getTimeAMPM(time) {
  return time < 12
    ? `${AM} ${time} 시`
    : `${PM} ${time > 12 ? time - 12 : time}시`;
}

export function getTimeList() {
  return Array.from({ length: HOUR }, (v, k) => k);
}

export function getDayOfTheWeek(date) {
  return DAY_OF_THE_WEEK[moment(date).day()];
}

export function getOnlyDay(date) {
  return moment(date).format("DD");
}

export function getDiffHour(startMoment, endMoment) {
  return Math.ceil(moment.duration(endMoment.diff(startMoment)).asHours());
}

export function getWeekDateListBasedOnDate(baseDate) {
  return WEEK_CALCULATE_LIST.map(calcDay => ({
    date: getCalcDay(baseDate, calcDay),
    calcDay,
  }));
}

export function checkIsSameDate(date, anotherDate, dateFormat) {
  return moment(date, dateFormat).isSame(moment(anotherDate, dateFormat));
}

export function checkIsSameDay(date, anotherDate, dateFormat) {
  return moment(date, dateFormat).isSame(
    moment(anotherDate, dateFormat),
    "day"
  );
}
