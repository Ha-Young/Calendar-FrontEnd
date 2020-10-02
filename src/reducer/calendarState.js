import {
  TOGGLE_WEEKLY_AND_DAILY,
  MOVE_NEXT_DAY,
  MOVE_PREV_DAY,
  SET_INIT_DATA,
} from '../constants';
import {
  destructDate,
  combineDate,
  calculateNewDate,
} from '../utils/utilFunction';

function eventData(state = {}, action) {
  if (action.type === SET_INIT_DATA) {
    return action.data;
  }

  return state;
}

function isWeekly(state = false, action) {
  if (action.type === TOGGLE_WEEKLY_AND_DAILY) {
    return !state;
  }

  return state;
}

function currentDate(state = destructDate(new Date()), action) {
  if (action.type === MOVE_NEXT_DAY) {
    const nextDate = calculateNewDate(combineDate(state), action.count);

    return destructDate(nextDate);
  }

  if (action.type === MOVE_PREV_DAY) {
    const nextDate = calculateNewDate(combineDate(state), -action.count);

    return destructDate(nextDate);
  }

  return state;
}

export default {
  eventData,
  isWeekly,
  currentDate,
};
