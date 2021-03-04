/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import { 
  SET_CURRENT_DAY, 
  SET_CURRENT_WEEK,
  SET_IS_WEEK_MODE,
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from "../constants/actionTypes";

export const setCurrentDay = (date) => ({
  type: SET_CURRENT_DAY,
  date,
});

export const setCurrentWeek = (week) => ({
  type: SET_CURRENT_WEEK,
  week,
});

export const setIsWeekMode = (isWeekMode) => ({
  type: SET_IS_WEEK_MODE,
  isWeekMode,
});

export const createEvent = (event) => ({
  type: CREATE_EVENT,
  event,
});

export const updateEvent = (prevEvent, newEvent) => ({
  type: UPDATE_EVENT,
  prevEvent,
  newEvent,
});

export const deleteEvent = (event) => ({
  type: DELETE_EVENT,
  event,
});