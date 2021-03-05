/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import { ADD_EVENT, DAY, EDIT_EVENT, NEXT_DATE, PREV_DATE, REMOVE_EVENT, SELECT_DATE, SELECT_TIME, WEEK } from "../constants/actionTypes";

export const prevDate = () => ({
  type: PREV_DATE,
});

export const nextDate = () => ({
  type: NEXT_DATE,
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

export const editEvent = (event) => ({
  type: EDIT_EVENT,
  event,
});

export const removeEvent = (event) => ({
  type: REMOVE_EVENT,
  event,
});
