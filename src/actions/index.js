/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

const increaseYear = () => ({
  type: types.INCREASE_YEAR
});

const decreaseYear = () => ({
  type: types.DECREASE_YEAR
});

const increaseMonth = () => ({
  type: types.INCREASE_MONTH
});

const decreaseMonth = () => ({
  type: types.DECREASE_MONTH
});

const submitEventInfo = (eventInfo) => ({
  type: types.SUBMIT_EVENTINFO,
  eventInfo
});

export {
  increaseYear,
  decreaseYear,
  increaseMonth,
  decreaseMonth,
  submitEventInfo
};
