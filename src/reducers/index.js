/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { combineReducers } from "redux";
import {
  GET_WEEK_DATA,
  CREATE_EVENT,
  UPDATE_EVENT,
  TOMORROW,
  YESTERDAY,
  DELETE_EVENT,
  SET_CURRENT_DAY,
} from "../constants/actionTypes";

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
    case SET_CURRENT_DAY:
      const current = new Date(state);
      current.setDate(current.getDate() + action.days);
      return current.toISOString().slice(0, 10);;
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
      const totalEvents = action.payload.totalEvents;
      const week = action.payload.week;
      const newState = {};
      // if (action.payload.week) {
        week.forEach(day => {
          if (totalEvents[day]) {
            newState[day] = totalEvents[day];
          }
        });
        return newState;
      // }
      // return state;
    default:
      return state;
  }
};

export default combineReducers({
  currentDay,
  events,
  weekEvents,
});
