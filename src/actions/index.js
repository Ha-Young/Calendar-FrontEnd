/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */

import {
} from "../constants/actionTypes";

export const setTodayDate = (current) => {
  if (!current instanceof Date) {
    throw new Error("current is must be Date instance.");
  }

  const weekDays = [];
  for (let i = 1; i < 8; i++) {
    weekDays.push(current.getDate() - current.getDay() + i);
  }

  // const first = current.getDate() - current.getDay() + 1;
  // const last = first + 6;

  // const firstDay = new Date(current.setDate(first));
  // const lastDay = new Date(current.setDate(first.getDate() + 6));

  return {
    mon: new Date(current.setDate(weekDays[0])),
    tue: new Date(current.setDate(weekDays[1])),
    wed: new Date(current.setDate(weekDays[2])),
    thur: new Date(current.setDate(weekDays[3])),
    fri: new Date(current.setDate(weekDays[4])),
    sat: new Date(current.setDate(weekDays[5])),
    sun: new Date(current.setDate(weekDays[6])),
  }
}