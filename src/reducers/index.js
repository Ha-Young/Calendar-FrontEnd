/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { combineReducers } from "redux";
import {
  GET_DATA,
  CREATE_EVENT,
  NEXT_DAY,
  YESTER_DAY,
  GET_WEEK_DATA,
} from "../constants/actionTypes";

const initialState = new Date().toISOString().slice(0, 10);

const currentDay = (state = initialState, action) => {
  switch (action.type) {
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
  "2021-03-05" : {
    "8" : {
      title: "go",
      description: "asdf",
      start: 8,
      end: 9,
    },
  },
  "2021-03-04" : {
    "10" : {
      title: "back",
      description: "eeee",
      start: 10,
      end: 11,
    },
  },
};

const oneEvent = (state = initialEvent, action) => {
  switch (action.type) {
    case GET_DATA:
      const { date, time } = action.payload;
      state = state[date][time];
      return state;
    default:
      return state;
  }
};

const events = (state = initialEvent, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const { title, description, start, end, eventDate } = action.event;
      const newState = {
        ...state[eventDate],
        [start]: {
          title, description, start, end
        }
      };
      state[eventDate] = newState;
      return state;
    default:
      return state;
  }
};

const weekEvents = (state = initialEvent, action) => {
  switch (action.type) {
    case GET_WEEK_DATA:
      const newState = {};
      action.week.forEach(day => {
        newState[day] = state[day];
      });
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  currentDay,
  events,
  oneEvent,
  weekEvents,
});
