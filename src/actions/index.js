/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import * as types from "../constants/actionTypes";

export const addEvent = event => ({
  type: types.ADD_EVENT_INFORMATION,
  event
});

export const removeEvent = dateInformation => ({
  type: types.REMOVE_EVENT_INFORMATION,
  dateInformation
});

export const setInitialData = data => ({
  type: types.SET_EVENT_INFORMATION,
  data
});
