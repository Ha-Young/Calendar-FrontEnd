/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import { MOVE_NEXT_DAY, MOVE_PREV_DAY, RESET_DAY } from "../constants/actionTypes";

 export const getNextDay = () => ({
   type: MOVE_NEXT_DAY,
 });

 export const getPrevDay = () => ({
   type: MOVE_PREV_DAY,
 });

 export const resetDay = () => ({
   type: RESET_DAY,
 });
 