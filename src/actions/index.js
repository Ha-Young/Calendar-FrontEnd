/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

const submitEventInfo = (eventInfo) => ({
  type: types.SUBMIT_EVENTINFO,
  eventInfo
});

const showDayCalendar = () => ({
  type: types.SHOW_DAYCALENDAR
});

const showWeekCalendar = () => ({
  type: types.SHOW_WEEKCALENDAR
});

export {
  submitEventInfo,
  showDayCalendar,
  showWeekCalendar
};
