/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

import { ACTION } from "constants/actionTypes";

export const addEvent = (newEvent) => {
  return {
    type: ACTION.ADD_EVENT,
    newEvent,
  };
};

const initialState = {
  userState: true,
  events: [],
  currentEvents: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.ADD_EVENT:
      return {
        ...state,
        events: [...state.events, { ...action.newEvent, id: new Date() }],
      };

    case ACTION.DELETE_EVENT:
      return;

    case ACTION.EDIT_EVENT_TITLE:
      return { ...state, title: action.title };

    case ACTION.EDIT_EVENT_DESCRIPTION:
      return { ...state, description: action.description };

    case ACTION.EDIT_EVENT_DATE:
      return { ...state, date: action.date };

    case ACTION.EDIT_EVENT_START_TIME:
      return { ...state, startTime: action.startTime };

    case ACTION.EDIT_EVENT_END_TIME:
      return { ...state, endTime: action.endTime };

    default:
      return state;
  }
}
