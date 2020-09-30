import { cloneDeep } from 'lodash';

import {
  TOGGLE_WEEKLY_AND_DAILY,
  MOVE_NEXT_DAY,
  MOVE_PREV_DAY,
  CREATE_EVENT,
  SET_INIT_DATA,
} from '../constants';
import {
  destructDate,
  getDateSIOType,
  getNextDay
} from '../utils/utilFunction';
import { setDataToFirebase } from '../utils/api';

function eventData(state = {}, action) {
  if (action.type === SET_INIT_DATA) {
    return action.data;
  }

  if (action.type === CREATE_EVENT) {
    const deepCopy = cloneDeep(state);
    const data = action.data;

    if (!deepCopy.date[data.date]) {
      deepCopy.date[data.date] = [];
    }

    deepCopy.date[data.date].push(data.id);
    deepCopy.events.push(data.id);
    deepCopy.eventsId[data.id] = data;

    setDataToFirebase(data);

    return deepCopy;
  }

  return state;
}

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
    const nextDate = getNextDay(currentDate, - (action.count));

    return nextDate;
  }

  return state;
}

export default {
  eventData,
  isWeekly,
  currentDate,
};
