import moment from 'moment';
import { YYYYMD } from '../constants/dateFormats';

export function dateInfoToObject(date) {
  const dateInfoObejct = {};

  const dateInfoArr = date.split('-');
  dateInfoObejct.year = dateInfoArr[0];
  dateInfoObejct.month = dateInfoArr[1];
  dateInfoObejct.day = dateInfoArr[2];
  dateInfoObejct.date = getDateFormat(date);
  dateInfoObejct.monthAlphaBet = changeMonthFormat(date);

  return dateInfoObejct;
}

export function dateInfoToObjectArr(currentDate) {
  const dateObjectArr = [];
  const currentMoment = moment(currentDate);
  for (let i = 0; i < 7; i++){
    dateObjectArr.push(dateInfoToObject(currentMoment.day(i).format(YYYYMD)));
  }

  return dateObjectArr;
}

export function changeMonthFormat(currentDate) {
  return moment(currentDate).format('MMM');
}

export function getDateFormat(currentDate) {
  return moment(currentDate).format('ddd');
}

export function moveDays(currentDate, changeNum, dateType) {
  return moment(currentDate).add(changeNum, dateType).format(YYYYMD);
}

export function getThisWeekSunAndSat(currentDate) {
  const currentWeekSunday = moment(currentDate).day(0).format(YYYYMD);
  const currentWeekSaturday = moment(currentDate).day(6).format(YYYYMD);
  return currentWeekSunday + '/' + currentWeekSaturday;
}
