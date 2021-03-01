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

// export const startFetchCalendarData = (payLoad) => ({
//   type: types.START_FETCH_CALENDAR_DATA,
//   payLoad,
// });

export const successFetchingCalendarData = (payLoad) => ({
  type: types.GET_CALENDAR_DATA_SUCCESS,
  payLoad,
});

export const failFetchingCalendarData = (payLoad) => ({
  type: types.GET_CALENDAR_DATA_FAILURE,
  payLoad,
});