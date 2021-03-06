/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

export const getEventData = (date, time) => ({
  type: types.GET_DATA,
  payload: { date, time },
});

export const getWeekEventData = (week) => ({
  type: types.GET_WEEK_DATA,
  week,
});

export const createEvent = (event) => ({
  type: types.CREATE_EVENT,
  event,
});

export const deleteEvent = (event) => ({
  type: types.DELETE_EVENT,
  event,
});

export const updateEvent = (from, to) => ({
  type: types.UPDATE_EVENT,
  payload: { from, to },
});

export const nextDay = () => ({
  type: types.TOMORROW,
});

export const yesterDay = () => ({
  type: types.YESTERDAY,
});
