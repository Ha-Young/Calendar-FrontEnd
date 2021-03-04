/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

export const changeCalendarType = (payLoad) => ({
  type: types.CHANGE_CALENDAR_TYPE,
  payLoad,
});

export const changeCalendarPage = (payLoad) => ({
  type: types.CHANGE_CALENDAR_PAGE,
  payLoad,
});

export const getEventDataSuccess = (payLoad) => ({
  type: types.GET_EVENT_DATA_SUCCESS,
  payLoad,
});

export const getEventDataFail = (errorMessage) => ({
  type: types.GET_EVENT_DATA_FAIL,
  errorMessage,
});

export const getEventData = () => ({
  type: types.GET_EVENT_DATA,
});

export const setEventDataSuccess = (payLoad) => ({
  type: types.SET_EVENT_DATA_SUCCESS,
  payLoad,
});

export const setEventDataFail = (errorMessage) => ({
  type: types.SET_EVENT_DATA_FAIL,
  errorMessage,
});

export const setEventData = (payLoad) => ({
  type: types.SET_EVENT_DATA,
  payLoad,
});

export const deleteEventDataSuccess = (payLoad) => ({
  type: types.DELETE_EVENT_DATA_SUCCESS,
  payLoad,
});

export const deleteEventDataFail = (errorMessage) => ({
  type: types.DELETE_EVENT_DATA_FAIL,
  errorMessage,
});

export const deleteEventData = () => ({
  type: types.DELETE_EVENT_DATA,
});

export const updateEventDataSuccess = (payLoad) => ({
  type: types.UPDATE_EVENT_DATA_SUCCESS,
  payLoad,
});

export const updateEventDataFail = (errorMessage) => ({
  type: types.UPDATE_EVENT_DATA_FAIL,
  errorMessage,
});

export const updateEventData = () => ({
  type: types.UPDATE_EVENT_DATA,
});
