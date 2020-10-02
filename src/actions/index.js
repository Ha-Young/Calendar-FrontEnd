import * as types from "../constants/actionTypes";

export const showDaily = () => ({
  type: types.SHOW_DAILY
});

export const showWeekly = () => ({
  type: types.SHOW_WEEKLY
});

export const login = () => ({
  type: types.LOGIN
});

export const logout = () => ({
  type: types.LOGOUT
});

export const showPreviousDay = () => ({
  type: types.SHOW_PREVIOUS_DAY
});

export const showNextDay = () => ({
  type: types.SHOW_NEXT_DAY
});

export const showPreviousWeek = () => ({
  type: types.SHOW_PREVIOUS_WEEK
});

export const showNextWeek = () => ({
  type: types.SHOW_NEXT_WEEK
});

export const fetchEvents = data => ({
  type: types.FETCH_EVENTS,
  data,
});

export const showEventDetails = details => ({
  type: types.SHOW_EVENT_DETAILS,
  details,
});
