import moment from 'moment';

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
    dateObjectArr.push(dateInfoToObject(currentMoment.day(i).format('YYYY-M-D')));
  }

  return dateObjectArr;
}

export function changeMonthFormat(currentDate) {
  return moment(currentDate).format('MMM');
}

export function getDateFormat(currentDate) {
  return moment(currentDate).format('ddd');
}