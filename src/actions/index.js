/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import { DAY, NEXT_DATE, PREV_DATE, WEEK } from "../constants/actionTypes";

export const prevDate = (date) => ({
  type: PREV_DATE,
  date,
});

export const nextDate = (date) => ({
  type: NEXT_DATE,
  date,
});

export const periodUnit = (unit = DAY) => {
  if (unit === WEEK) {
    return {
      type: WEEK,
      unit,
    };
  }

  return {
    type: DAY,
    unit,
  };
};
