/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as types from "../constants/actionTypes";

export const connectDB = (data) => ({
  type: types.CONNECT_DB,
  data,
});

export const createEvent = (events) => ({
  type: types.CREATE_EVENT,
  events,
});

export const loadDate = () => ({
  type: types.GET_DATE,
});

export const nextDay = () => ({
  type: types.NEXT_DAY,
});

export const yesterDay = () => ({
  type: types.YESTER_DAY,
});
