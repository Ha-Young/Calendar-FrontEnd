/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { combineReducers } from "redux";
import {
  GET_DATA,
  GET_WEEK_DATA,
  CREATE_EVENT,
  UPDATE_EVENT,
  TOMORROW,
  YESTERDAY,
  DELETE_EVENT,
} from "../constants/actionTypes";
import _ from "lodash";

const initialState = new Date().toISOString().slice(0, 10);

const currentDay = (state = initialState, action) => {
  switch (action.type) {
    case TOMORROW:
      const tomorrow = new Date(state);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow.toISOString().slice(0, 10);
    case YESTERDAY:
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
      eventDay: "2021-03-05",
      title: "go",
      description: "asdf",
      start: 8,
      end: 9,
    },
  },
  "2021-03-04" : {
    "10" : {
      eventDay: "2021-03-04",
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
      const { eventDay, start } = action.event;
      state[eventDay] = {
        ...state[eventDay],
        [start]: {
          ...action.event,
        },
      };
      return state;
    case UPDATE_EVENT:
      const fromEvent = action.payload.from;
      const toEvent = action.payload.to;
      const updateCopy =  Object.assign({}, state);
      delete updateCopy[fromEvent.eventDay][fromEvent.start];
      updateCopy[toEvent.eventDay] = {
        ...updateCopy[toEvent.eventDay],
        [toEvent.start]: {
          ...toEvent,
        },
      };
      return updateCopy;
    case DELETE_EVENT:
      const targetEvent = action.event;
      const deletedCopy = Object.assign({}, state);
      delete deletedCopy[targetEvent.eventDay][targetEvent.start];
      return deletedCopy;
    default:
      return state;
  }
};

const weekEvents = (state = initialEvent, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const { eventDay, start } = action.event;
      state[eventDay] = {
        ...state[eventDay],
        [start]: {
          ...action.event,
        },
      };
      return state;
    case UPDATE_EVENT:
      const fromEvent = action.payload.from;
      const toEvent = action.payload.to;
      const updateCopy =  Object.assign({}, state);
      delete updateCopy[fromEvent.eventDay][fromEvent.start];
      updateCopy[toEvent.eventDay] = {
        ...updateCopy[toEvent.eventDay],
        [toEvent.start]: {
          ...toEvent,
        },
      };
      return updateCopy;
    case DELETE_EVENT:
      const targetEvent = action.event;
      const deletedCopy = Object.assign({}, state);
      delete deletedCopy[targetEvent.eventDay][targetEvent.start];
      return deletedCopy;
    case GET_WEEK_DATA:
      if (action.week) {
        const newState = {};
        action.week.forEach(day => {
          if (state[day]) {
            newState[day] = state[day];
          }
        });
        return newState;
      }
      return state;
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
