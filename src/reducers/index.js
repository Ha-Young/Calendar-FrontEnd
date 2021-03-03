/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { combineReducers } from "redux";

const initialStateOfEventInfo = [{
  "event-description": "",
  "event-end-date": 4,
  "event-end-hour": 2,
  "event-end-month": 3,
  "event-end-year": 2021,
  "event-start-date": 4,
  "event-start-hour": 1,
  "event-start-month": 3,
  "event-start-year": 2021,
  "event-title": ""
}];

const eventInfo = (state = [], action) => {
  console.log("Reducer-eventInfo");
  console.log(action)
  switch (action.type) {
    case "SUBMIT_EVENTINFO":
      return [...state, action.eventInfo];
    default:
      return state;
  }
}

export default combineReducers({
  eventInfo
});
