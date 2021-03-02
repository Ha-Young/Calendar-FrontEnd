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

export {
  increaseYear,
  decreaseYear,
  increaseMonth,
  decreaseMonth
};
