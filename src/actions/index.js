/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as actionTypes from "../constants/actionTypes";

export const toggleDay = () => ({type: actionTypes.TOGGLE_VIEW_TYPE});

export const moveToToday = () => ({type: actionTypes.MOVE_TO_TODAY});
export const prevDate = () => ({type: actionTypes.PREV_DATE});
export const nextDate = () => ({type: actionTypes.NEXT_DATE});
export const prevWeek = () => ({type: actionTypes.PREV_WEEK});
export const nextWeek = () => ({type: actionTypes.NEXT_WEEK});

export const addEvent = (event) => ({
  type: actionTypes.ADD_EVENT,
  payload: event,
});

export const eventDetail = (date, id) => ({
  type: actionTypes.DETAIL_EVENT,
  payload: {
    date,
    id,
  },
});

export const editEvent = (event, date, prevId) => ({
  type: actionTypes.EDIT_EVENT,
  payload: {
    date,
    event,
    prevId,
  },
});

export const initEvent = (events) => ({
  type: actionTypes.INIT_EVENT,
  payload: events,
});

export const deleteEvent = (date, prevId) => ({
  type: actionTypes.DELETE_EVENT,
  payload: {
    date,
    prevId,
  },
});
