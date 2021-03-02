/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

import * as types from "../constants/actionTypes";
import { DateTime } from 'luxon';

const initialState = {
  selectedDate: "",
  selectedWeek: "",
  selectedEventId: "",
  viewSelector: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_DAY:
      return {
        ...state,
        selectedDate: formatDate(action.payload.selectedDate),
      };
    default:
      return state;
  } 
}

const formatDate = (date) => {
  return DateTime.fromJSDate(date);
}
