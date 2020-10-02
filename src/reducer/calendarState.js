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
import { createReducer } from '@reduxjs/toolkit';

const eventData = createReducer({}, {
  [SET_INIT_DATA]: (_, action) => action.payload,
});

const isWeekly = createReducer(false, {
  [TOGGLE_WEEKLY_AND_DAILY]: state => !state,
});

const currentDate = createReducer(destructDate(new Date()), {
  [MOVE_NEXT_DAY]: (state, action) => {
    const nextDate = calculateNewDate(combineDate(state), action.payload);
    return destructDate(nextDate);
  },
  [MOVE_PREV_DAY]: (state, action) => {
    const prevDate = calculateNewDate(combineDate(state), -action.payload);
    return destructDate(prevDate);
  }
});

export default {
  eventData,
  isWeekly,
  currentDate,
};
