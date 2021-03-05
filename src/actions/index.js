/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import * as types from "../constants/actionTypes";

let nextEventId = 0;

export const receiveEventData = (eventData) => ({
  type: types.RECEIVE_EVENT_DATA,
  id: nextEventId++,
  eventData,
});
