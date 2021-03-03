/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

import * as types from "../constants/actionTypes";
import { DateTime } from 'luxon';

const initialDay = DateTime.now();
const initialState = {
  selectedDate: initialDay,
  selectedWeek: calculateWeek(initialDay),
  events: [],
  selectedEventId: "",
  viewSelector: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SELECT_DAY: {
      const newDate = formatDate(action.payload.selectedDate);
      return {
        ...state,
        selectedDate: newDate,
        selectedWeek: calculateWeek(newDate),
      };
    }

    case types.NEXT_BUTTON_CLICKED: {
      // TODO daily, weekly에 따라 로직 분기처리 필요함!
      const newDate = state.selectedDate.plus({ days: 1 });
      return {
        ...state,
        selectedDate: newDate,
        selectedWeek: calculateWeek(newDate),
      };
    }

    case types.PREV_BUTTON_CLICKED: {
      const newDate = state.selectedDate.minus({ days: 1 });
      return {
        ...state,
        selectedDate: newDate,
        selectedWeek: calculateWeek(newDate),
      };
    }

    case types.LOAD_EVENTS_OF_SELECTED_DATE: {
      return {
        ...state,
        events: action.payload.events,
      };
    }

    default:
      return state;
  }
}

function formatDate(date) {
  return DateTime.fromJSDate(date);
}

function calculateWeek(date) {
  const weekYear = date.weekYear;
  const weekNumber = date.weekNumber;
  const selectedWeek = [];

  for (let i = 1; i <= 7; i++) {
    selectedWeek.push(DateTime.fromObject({ weekYear: weekYear, weekNumber: weekNumber, weekday: i }));
  }

  return selectedWeek;
}
