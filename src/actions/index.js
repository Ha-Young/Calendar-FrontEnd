/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

export const getData = (data) => ({
  type: types.GET_DATA,
  data,
});

export const createEvent = (event) => ({
  type: types.CREATE_EVENT,
  event,
});

export const deleteEvent = (eventId) => ({
  type: types.DELETE_EVENT,
  eventId,
});
export const updateEvent = (events) => ({
  type: types.UPDATE_EVENT,
  events,
});

export const loadDate = () => ({
  type: types.GET_DATE,
});

export const nextDay = () => ({
  type: types.NEXT_DAY,
});

export const yesterDay = () => ({
  type: types.YESTER_DAY,
});
