/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import {
  MOVE_NEXT_DAY,
  MOVE_PREV_DAY,
  MOVE_PREV_WEEK,
  MOVE_NEXT_WEEK,
  RESET_DAY,
  SET_DAY_PAGE,
  SET_WEEK_PAGE,
  SET_EVENT_PAGE,
  ADD_EVENT,
  DELETE_EVENT,
  GET_FIREBASE_EVENTS,
} from "../constants/actionTypes";

export const setDayPage = () => ({
  type: SET_DAY_PAGE,
});

export const setWeekPage = () => ({
  type: SET_WEEK_PAGE,
});

export const setEventPage = () => ({
  type: SET_EVENT_PAGE,
});

export const movePrevDay = () => ({
  type: MOVE_PREV_DAY,
});

export const moveNextDay = () => ({
  type: MOVE_NEXT_DAY,
});

export const movePrevWeek = () => ({
  type: MOVE_PREV_WEEK,
});

export const moveNextWeek = () => ({
  type: MOVE_NEXT_WEEK,
});

export const resetDay = () => ({
  type: RESET_DAY,
});

export const addEvent = (event) => ({
  type: ADD_EVENT,
  payload: {
    [event.date]: event
  },
});

export const deleteEvent = (event) => ({
  type: DELETE_EVENT,
  payload: {
    key: event.date
  },
});

export const getEvents = (data) => ({
  type: GET_FIREBASE_EVENTS,
  data,
});
