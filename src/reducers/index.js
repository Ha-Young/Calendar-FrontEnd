import { getToday, addDate } from "../api/date";
/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

const initialState = {
  currentPageDate: getToday(),
  eventlist: [],
};

export default function reducer(state = initialState, action) {
  const newState = { ...state };
  console.log(action.type);

  switch (action.type) {
    case "CLICK_LEFT":
      newState.currentPageDate = addDate(state.currentPageDate, {days: -1});
      break;
    case "CLICK_RIGHT":
      newState.currentPageDate = addDate(state.currentPageDate, {days: 1});
      break;
    case "CLICK_LEFT_WEEK":
      newState.currentPageDate =addDate(state.currentPageDate, {days: -7});
      break;
    case "CLICK_RIGHT_WEEK":
      newState.currentPageDate =addDate(state.currentPageDate, {days: 7});
      break;
    case "SAVE_DATA_TO_REDUX_STATE":
      newState.eventlist = action.eventlist;
      break;
    default:
      break;
  }

  return newState;
}
