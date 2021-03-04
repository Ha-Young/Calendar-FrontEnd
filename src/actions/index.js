/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import { ADD_EVENT, DAY, NEXT_DATE, PREV_DATE, SELECT_DATE, SELECT_TIME, WEEK } from "../constants/actionTypes";

export const prevDate = (date) => ({
  type: PREV_DATE,
  date,
});

export const nextDate = (date) => ({
  type: NEXT_DATE,
  date,
});

export const selectDate = (date) => ({
  type: SELECT_DATE,
  date,
});

export const selectTime = (time) => ({
  type: SELECT_TIME,
  time,
});

export const periodUnit = (unit = DAY) => {
  if (unit === WEEK) {
    return {
      type: WEEK,
      unit,
    };
  }

  return {
    type: DAY,
    unit,
  };
};

export const addEvent = (event) => ({
  type: ADD_EVENT,
  event,
});
