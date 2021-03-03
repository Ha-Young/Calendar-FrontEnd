import * as types from "../constants/actionTypes";

/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

export const setDailyCalendarMode = () => ({
  type: types.SET_DAILY_CALENDAR_MODE,
});

export const setWeeklyCalendarMode = () => ({
  type: types.SET_WEEKLY_CALENDAR_MODE,
});

export const goPrevDate = () => ({
  type: types.GO_PREV_DATE,
});

export const goNextDate = () => ({
  type: types.GO_NEXT_DATE,
});

export const goLastWeek = () => ({
  type: types.GO_LAST_WEEK,
});

export const goNextWeek = () => ({
  type: types.GO_NEXT_WEEK,
});

export const setCreateEventMode = () => ({
  type: types.SET_CREATE_EVENT_MODE,
});

export const setUpdateEventMode = () => ({
  type: types.SET_UPDATE_EVENT_MODE,
});
