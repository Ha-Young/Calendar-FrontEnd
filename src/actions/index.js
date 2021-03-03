/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as actionTypes from "../constants/actionTypes";

export const toggleDay = () => ({type: actionTypes.TOGGLE_VIEW_TYPE});

export const prevDate = () => ({type: actionTypes.PREV_DATE});
export const nextDate = () => ({type: actionTypes.NEXT_DATE});
export const prevWeek = () => ({type: actionTypes.PREV_WEEK});
export const nextWeek = () => ({type: actionTypes.NEXT_WEEK});

export const submitEvent = (event) => ({
  type: actionTypes.SUBMIT_EVENT,
  payload: event,
});
