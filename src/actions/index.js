/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import * as actionTypes from "../constants/actionTypes";

export const toggleDay = () => ({type: actionTypes.TOGGLE_DAY});

export const preDate = () => ({type: actionTypes.PRE_DATE});
export const nextDate = () => ({type: actionTypes.NEXT_DATE});
