import moment from "moment";

import { DATE_FORMAT, DATE_FORMAT_WITH_HOUR } from "../constants/common";
import { ERROR_MSG_DATE_RANGE } from "../constants/errorMsg";

const HOUR = 24;
const AM = "AM";
const PM = "PM";
const DAY_OF_THE_WEEK = [
  "일요일", "월요일", "화요일", "수요일",
  "목요일", "금요일", "토요일"
];
const WEEK_CALCULATE_LIST = [-3, -2, -1, 0, 1, 2, 3];

export function getCurrentDateStr(format = DATE_FORMAT) {
  return moment().format(format);
}

export function getMoment(date, format = DATE_FORMAT) {
  return date ? moment(date, format) : moment();
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
  return Array.from({ length: HOUR }, (_, k) => k);
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

export function getDiffDay(dateA, dateB, isGetAbs = true) {
  const momentDateA = moment(dateA);
  const momentDateB = moment(dateB);

  const dayDiff = moment.duration(momentDateB.diff(momentDateA)).asDays();

  if (isGetAbs) {
    return Math.abs(dayDiff);
  }

  return dayDiff;
}

export function getWeekDateListBasedOnDate(baseDate) {
  return WEEK_CALCULATE_LIST.map(calcDay => ({
    date: getCalcDay(baseDate, calcDay),
    calcDay,
  }));
}

export function getDateListBasedOnRange(startDate, endDate) {
  if (getDiffDay(startDate, endDate) < 0) {
    throw new Error(ERROR_MSG_DATE_RANGE);
  }

  const dateList = [startDate];

  let calcDate = startDate;

  while (calcDate !== endDate) {
    calcDate = getCalcDay(calcDate, + 1);
    dateList.push(calcDate);
  }

  return dateList;
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

export function getHour(date, dateFormat = DATE_FORMAT_WITH_HOUR) {
  return moment(date, dateFormat).hour();
}
