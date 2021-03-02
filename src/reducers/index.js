/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { combineReducers } from "redux";

const initialYear = new Date().getFullYear();

const changeYear = (state = initialYear, action) => {
  switch (action.type) {
    case "INCREASE_YEAR":
      return state + 1;
    case "DECREASE_YEAR":
      if (state === 0) {
        return new Date().getFullYear();
      }

      return state - 1;
    default:
      return state;
  }
}

const initialMonth = new Date().getMonth() + 1;

const changeMonth = (state = initialMonth, action) => {
  switch (action.type) {
    case "INCREASE_MONTH":
      if (state === 12) {
        return 1;
      }

      return state + 1;
    case "DECREASE_MONTH":
      if (state === 1) {
        return 12;
      }

      return state - 1;
    default:
      return state;
  }
}

export default combineReducers({
  changeYear,
  changeMonth
});
