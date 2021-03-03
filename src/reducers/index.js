import { combineReducers } from "redux";
import { subDate, addDate, getCurrentWeek, getLastWeek, getNextWeek } from "../utils/SetDate";

/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

const today = new Date();

const initialState = {
  calendarMode: "daily",
  today: today,
  selectedDate: today,
  week: getCurrentWeek(today),
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_DAILY_MODE":
      return {
        ...state,
        calendarMode: "daily"
      }
    case "CHANGE_WEEKLY_MODE":
      return {
        ...state,
        calendarMode: "weekly",
        week: getCurrentWeek(state.selectedDate),
      }
    case "GO_PREV_DATE":
      return {
        ...state,
        selectedDate: subDate(state.selectedDate, 1),
      }
    case "GO_NEXT_DATE":
      return {
        ...state,
        selectedDate: addDate(state.selectedDate, 1),
      }
    case "GO_LAST_WEEK":
      return {
        ...state,
        week: getLastWeek(state.week),
        selectedDate: subDate(state.selectedDate, 7),
      }
    case "GO_NEXT_WEEK":
      return {
        ...state,
        week: getNextWeek(state.week),
        selectedDate: addDate(state.selectedDate, 7),
      }
    default:
      return state;
  }
}
