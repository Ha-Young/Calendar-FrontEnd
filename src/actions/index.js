/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import { ADD_EVENT } from "../constants/actionTypes";

export const addEvent = (eventInfo) => {
  return {
    type: ADD_EVENT,
    eventInfo,
  }
}
