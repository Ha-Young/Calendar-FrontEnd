/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import {
  MOVE_NEXT_DAY,
  MOVE_PREV_DAY,
  MOVE_PREV_WEEK,
  MOVE_NEXT_WEEK,
  RESET_DAY,
  SET_DAILY,
  SET_WEEKLY,
  ADD_EVENT,
} from "../constants/actionTypes";

export const setDaily = () => ({
  type: SET_DAILY,
});

export const setWeekly = () => ({
  type: SET_WEEKLY,
});

export const movePrevDay = () => ({
  type: MOVE_PREV_DAY,
});

export const moveNextDay = () => ({
  type: MOVE_NEXT_DAY,
});

export const movePrevWeek = () => ({
  type: MOVE_PREV_WEEK,
});

export const moveNextWeek = () => ({
  type: MOVE_NEXT_WEEK,
});

export const resetDay = () => ({
  type: RESET_DAY,
});

export const addEvent = (event) => ({
  type: ADD_EVENT,
  payload: {
    [event.startDate]: event
  },
});
