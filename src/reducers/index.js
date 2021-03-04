import { saveNewRecord } from "../api";
import { getToday, addDate, parseDate } from "../api/date";
/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

const initialState = {
  events: [],
  currentPageDate: getToday(),
};

export default function reducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case "SAVE_RECORD":
      saveNewRecord(action.content);
      newState.events.push(action.content);
      break;

    case "CLICK_LEFT":
      newState.currentPageDate = addDate(state.currentPageDate, {days: -1});
      break;
    case "CLICK_RIGHT":
      newState.currentPageDate = addDate(state.currentPageDate, {days: 1});
      break;
    default:
      break;
  }

  return newState;
}
