import moment from 'moment';

import { DATE_FORMAT } from '../constants/common';

const HOUR = 24;
const AM = "AM";
const PM = "PM";
const DAY_OF_THE_WEEK = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"];

export function getCurrentDateStr(format = DATE_FORMAT) {
  return moment().format(format);
}

export function getCalcDay(date, calcDay) {
  if (calcDay >= 0) {
    return moment(date).add(calcDay, 'day').format(DATE_FORMAT);
  }

  return moment(date).subtract(calcDay * -1, 'day').format(DATE_FORMAT);
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

export function getOnlyDays(date) {
  return moment(date).format("DD");
}
