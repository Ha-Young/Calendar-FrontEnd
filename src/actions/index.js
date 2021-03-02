/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import { SET_CURRENT_DAY, SET_CURRENT_WEEK } from "../constants/actionTypes";

export const setCurrentDay = (date) => ({
  type: SET_CURRENT_DAY,
  date,
});

export const setCurrentWeek = (week) => ({
  type: SET_CURRENT_WEEK,
  week,
});