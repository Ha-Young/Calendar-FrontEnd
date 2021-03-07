/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

export const getWeekEventData = (week, totalEvents) => ({
  type: types.GET_WEEK_DATA,
  payload: { week, totalEvents },
});

export const createEvent = event => ({
  type: types.CREATE_EVENT,
  event,
});

export const deleteEvent = event => ({
  type: types.DELETE_EVENT,
  event,
});

export const updateEvent = (from, to) => ({
  type: types.UPDATE_EVENT,
  payload: { from, to },
});

export const setCurrentDay = days => ({
  type: types.SET_CURRENT_DAY,
  days,
});
