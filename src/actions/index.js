/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

const submitEventInfo = (eventInfo) => ({
  type: types.SUBMIT_EVENTINFO,
  eventInfo
});

const routeEventId = (eventId) => ({
  type: types.ROUTE_EVENTID,
  eventId
});

export {
  submitEventInfo,
  routeEventId
};
