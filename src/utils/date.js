import moment from 'moment';

import { DATE_FORMAT } from '../constants/common';

export function getCurrentDateStr(format = DATE_FORMAT) {
  return moment().format(format);
}

export function getCalcDay(date, calcDay) {
  if (calcDay >= 0) {
    return moment(date).add(calcDay, 'day').format(DATE_FORMAT);
  }

  return moment(date).subtract(calcDay * -1, 'day').format(DATE_FORMAT);
}
