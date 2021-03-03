/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

export const connectDB = (data) => ({
  type: types.CONNECT_DB,
  data,
});

export const onSubmit = (form) => ({
  type: types.EVENT_SUBMIT,
  form,
});

export const loadToday = () => ({
  type: types.TODAY,
});
