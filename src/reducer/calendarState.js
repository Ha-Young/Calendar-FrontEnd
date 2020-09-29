import {
  TOGGLE_WEEKLY_AND_DAILY,
  MOVE_NEXT_DAY,
  MOVE_PREV_DAY,
} from '../constants';
import {
  destructDate,
  getDateSIOType,
  getNextDay
} from '../utils/utilFunction';

function isWeekly(state = false, action) {
  if (action.type === TOGGLE_WEEKLY_AND_DAILY) {
    return !state;
  }

  return state;
}

function currentDate(state = destructDate(), action) {
  if (action.type === MOVE_NEXT_DAY) {
    const currentDate = getDateSIOType(state);
    const nextDate = getNextDay(currentDate, action.count);
    return nextDate;
  }

  if (action.type === MOVE_PREV_DAY) {
    const currentDate = getDateSIOType(state);
    const nextDate = getNextDay(currentDate, -(action.count));

    return nextDate;
  }

  return state;
}

export default {
  isWeekly,
  currentDate,
};
