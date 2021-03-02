/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

export const setCurrentDate = (currentDate) => ({
  type: "SET_CURRENT_DATE",
  currentDate
});

export const setCurrentWeek = (currentWeek) => ({
  type: "SET_CURRENT_WEEK",
  currentWeek
});

export const changeCalendarMode = (calendarMode) => ({
  type: "CHANGE_CALENDAR_MODE",
  calendarMode
});