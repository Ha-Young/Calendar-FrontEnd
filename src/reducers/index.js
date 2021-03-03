/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

// const initialState = "Create your state structure!";

// export default function reducer(state = initialState) {
//   return state;
// }
import { combineReducers } from "redux";
import { format } from "date-fns";
import { CREATE_EVENT, GET_DATE } from "../constants/actionTypes";

const initialToday = new Date();

const initialState = {
  year: format(initialToday, "yyyy"),
  month: format(initialToday, "MMMM"),
  date: format(initialToday, "dd"),
};

const currentDay = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATE:
      return state;
    default:
      return state;
  }
};

const events = (state = [], action) =>{
  switch (action.type) {
    case CREATE_EVENT:
      return state.concat(action.events);
    default:
      return state;
  }
};

export default combineReducers({
  currentDay,
  events,
});
