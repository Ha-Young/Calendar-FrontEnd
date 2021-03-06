/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import * as types from "../constants/actionTypes";

export const receiveEventData = (eventData) => ({
  type: types.RECEIVE_EVENT_DATA,
  dateAndTime: `${eventData.date}-${eventData.startTime}-${eventData.endTime}`,
  eventData,
});
