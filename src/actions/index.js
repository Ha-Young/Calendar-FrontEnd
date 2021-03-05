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

export const submitEvent = (event) => ({
  type: actionTypes.SUBMIT_EVENT,
  payload: event,
});
export const eventDetail = (date, id) => ({
  type: actionTypes.DETAIL_EVENT,
  payload: {
    date,
    id,
  },
});
export const editEvent = (event, prevId) => ({
  type: actionTypes.EDIT_EVENT,
  payload: {
    event,
    prevId,
  },
});
