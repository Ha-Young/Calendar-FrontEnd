/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

export const changeCalendarType = (payLoad) => ({
  type: types.CHANGE_CALENDAR_TYPE,
  payLoad,
});
