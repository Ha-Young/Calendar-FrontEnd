import * as types from "../constants/actionTypes";

export const moveToPrevPage = date => ({
  type: types.PREV_PAGE,
  payLoad: date
});

export const moveToNextPage = date => ({
  type: types.NEXT_PAGE,
  payLoad: date
});

export const weeklyCalendarType = type => ({
  type: types.SET_WEEKLY_CALENDAR,
  payLoad: type
});

export const dailyCalendarType = type => ({
  type: types.SET_DAILY_CALENDAR,
  payLoad: type
});

export const addNewEvent = (title, description, startDate, endDate) => ({
  type: types.ADD_EVENT,
  payLoad: {
    title,
    description,
    startDate,
    endDate
  }
});

export const receiveEvent = events => ({
  type: types.RECEIVE_EVENT,
  events
});

export const removeEvent = startDate => ({
  type: types.REMOVE_EVENT,
  payLoad: startDate
});

export const changeEvent = (title, description, startDate, endDate) => ({
  type: types.CHANGE_EVENT,
  payLoad: {
    title: title,
    description: description,
    startDate: startDate,
    endDate: endDate
  }
});

