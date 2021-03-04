/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { combineReducers } from "redux";
import { CREATE_EVENT, GET_DATE, NEXT_DAY, YESTER_DAY } from "../constants/actionTypes";
import _ from "lodash";

const initialState = new Date().toISOString().slice(0, 10);

const currentDay = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATE:
      return state;
    case NEXT_DAY:
      const nextDay = new Date(state);
      nextDay.setDate(nextDay.getDate() + 1);
      return nextDay.toISOString().slice(0, 10);
    case YESTER_DAY:
      const prevDay = new Date(state);
      prevDay.setDate(prevDay.getDate() - 1);
      return prevDay.toISOString().slice(0, 10);
    default:
      return state;
  }
};

const initialEvent = {
  "2021-03-04" : [],
};

initialEvent["2021-03-04"][8] = {
  title: "go",
  description: "asdf",
  start: 8,
  end: 9,
};

const events = (state = initialEvent, action) =>{
  switch (action.type) {
    case CREATE_EVENT:
      const { title, description, start, end, eventDate } = action.events;
      if (!state[eventDate]) {
        state[eventDate] = [];
      }
      state[eventDate][start] = {
        title,
        description,
        start,
        end,
      };
      // return state.concat(action.events);
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default combineReducers({
  currentDay,
  events,
});
