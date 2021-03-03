/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import { SET_CURRENT_DATE, SET_CURRENT_WEEK, CHANGE_CALENDAR_MODE } from '../constants/actionTypes';

export const setCurrentDate = (currentDate) => ({
  type: SET_CURRENT_DATE,
  currentDate
});

export const setCurrentWeek = (currentWeek) => ({
  type: SET_CURRENT_WEEK,
  currentWeek
});

export const changeCalendarMode = (calendarMode) => ({
  type: CHANGE_CALENDAR_MODE,
  calendarMode
});
