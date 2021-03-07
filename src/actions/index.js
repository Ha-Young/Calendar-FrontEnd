/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import {
  GET_WEEK_DATA,
  CREATE_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
  SET_CURRENT_DAY,
} from "../constants/actionTypes";

export const getWeekEventData = (week, totalEvents) => ({
  type: GET_WEEK_DATA,
  payload: { week, totalEvents },
});

export const createEvent = event => ({
  type: CREATE_EVENT,
  event,
});

export const deleteEvent = event => ({
  type: DELETE_EVENT,
  event,
});

export const updateEvent = (from, to) => ({
  type: UPDATE_EVENT,
  payload: { from, to },
});

export const setCurrentDay = days => ({
  type: SET_CURRENT_DAY,
  days,
});
