/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { combineReducers } from "redux";
import moment from "moment";

import { TOGGLE_DAY, PRE_DATE, NEXT_DATE } from "../constants/actionTypes";

function isDaily(state = true, action) {
  switch (action.type) {
    case TOGGLE_DAY:
      return !state;
    default:
      return state;
  }
}

function date(state = moment(), action) {
  switch (action.type) {
    case PRE_DATE:
      return state.clone().subtract(1, "days");
    case NEXT_DATE:
      return state.clone().add(1, "days");
    default:
      return state;
  }
}

export default combineReducers({
  isDaily,
  date,
});
