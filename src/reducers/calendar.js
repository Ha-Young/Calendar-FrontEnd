/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

import {
  MOVE_NEXT_DAY,
  MOVE_PREV_DAY,
  MOVE_PREV_WEEK,
  MOVE_NEXT_WEEK,
  RESET_DAY,
  SET_DAILY,
  SET_WEEKLY,
} from "../constants/actionTypes";

const MOVE = {
  DAY: 1,
  WEEK: 7,
};

export const PAGE_TYPE = {
  DAILY: "Day",
  WEEKLY: "Week",
};

const initialState = {
  currentPage: "Daily",
  countOfDay: 0,
  countOfWeek: 0,
  activedDay: "",
};

const calendar = (state = initialState, action) => {
  switch (action.type) {
    case SET_DAILY:
      return {
        ...state,
        currentPage: PAGE_TYPE.DAILY
      };
    case SET_WEEKLY:
      return {
        ...state,
        currentPage: PAGE_TYPE.WEEKLY
      };
    case MOVE_PREV_DAY:
      return {
        ...state,
        countOfDay: state.countOfDay - MOVE.DAY
      };
    case MOVE_NEXT_DAY:
      return {
        ...state,
        countOfDay: state.countOfDay + MOVE.DAY
      };
    case MOVE_PREV_WEEK:
      return {
        ...state,
        countOfWeek: state.countOfWeek - MOVE.WEEK
      };
    case MOVE_NEXT_WEEK:
      return {
        ...state,
        countOfWeek: state.countOfWeek + MOVE.WEEK
      };
    case RESET_DAY:
      return {
        ...state,
        countOfDay: initialState.countOfDay,
        countOfWeek: initialState.countOfWeek
      };
    default:
      return state;
  }
};

export default calendar;
