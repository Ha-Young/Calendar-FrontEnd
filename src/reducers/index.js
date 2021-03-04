/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

import { DAY, NEXT_DATE, PREV_DATE, WEEK, SELECT_TIME, SELECT_DATE } from "../constants/actionTypes";
import { getCurrentWeek, getLastWeek, getNextWeek, getTomorrow, getYesterday } from "../utils/getDate";

const initialState = {
  period: DAY,
  today: new Date().toLocaleDateString(),
  currentDay: new Date().toLocaleDateString(),
  currentWeek: getCurrentWeek(new Date()),
  events: {},
};

export default function reducer(state = initialState, action) {
  const copy = { ...state };

  switch (action.type) {
    case DAY:
      copy.period = DAY;
      return copy;
    case WEEK:
      copy.period = action.unit;
      return copy;

    case PREV_DATE:
      if (copy.period === DAY) {
        copy.currentDay = getYesterday(copy.currentDay);
      } else {
        copy.currentDay = getLastWeek(copy.currentDay);
      }
      return copy;
    case NEXT_DATE:
      if (copy.period === DAY) {
        copy.currentDay = getTomorrow(copy.currentDay);
      } else {
        copy.currentDay = getNextWeek(copy.currentDay);
      }
      return copy;

    case SELECT_DATE:
      copy.currentDay = new Date(action.date).toLocaleDateString();
      return copy;
    case SELECT_TIME:
      copy.selectedTime = action.time;
      return copy;

    default:
      return state;
  }
}
