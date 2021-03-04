/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

import * as types from "../constants/actionTypes";
import { DateTime } from 'luxon';

const initialDay = DateTime.now();
// REVIEW calendar contents 안에 data attribute 로 id랑 요일 index 갖고있으면 event에서 찾아서 detail로 넘겨주면 되니까 selectedEventInfo 굳이 필요 없을수도??
// TODO selectedDate랑 isDailyView 같이 넘겨주면 calculatedDates를 안에서 계산할 수 있음. satate안늘리고 차라리 그게 나을수도?
const initialState = {
  selectedDate: initialDay,
  calculatedDates: [],
  events: [],
  selectedEventInfo: {},
  isDailyView: true,
};

// TODO newDate는 이제 필요없을듯? 바로 대입해도 될듯
export default function reducer(state = initialState, action) {
  console.log('reducer')
  switch (action.type) {
    case types.SELECT_DAY: {
      const newDate = formatDate(action.payload.selectedDate);

      return {
        ...state,
        selectedDate: newDate,
      };
    }

    case types.NEXT_BUTTON_CLICKED: {
      // TODO daily, weekly에 따라 로직 분기처리 필요
      const newDate = state.selectedDate.plus({ days: 1 });

      return {
        ...state,
        selectedDate: newDate,
      };
    }

    case types.PREV_BUTTON_CLICKED: {
      const newDate = state.selectedDate.minus({ days: 1 });

      return {
        ...state,
        selectedDate: newDate,
      };
    }

    case types.LOAD_EVENTS_OF_SELECTED_DATE: {
      return {
        ...state,
        events: action.payload.events,
      };
    }

    case types.TOGGLE_CALENDAR_VIEW: {
      return {
        ...state,
        isDailyView: !state.isDailyView,
      }
    }

    case types.SELECT_EVENT: {
      return {
        ...state,
        selectedEventInfo: {
          selectedEventId: action.payload.selectedEventId,
          selectedEventDayIndex: action.payload.selectedEventDayIndex,
        },
      }
    }

    default:
      return state;
  }
}

function formatDate(date) {
  return DateTime.fromJSDate(date);
}

// TODO util 만들어서 빼기.
export function calculateWeek(date, isDailyView) {
  if (isDailyView) return [date];

  const weekYear = date.weekYear;
  const weekNumber = date.weekNumber;
  const selectedWeek = [];

  for (let i = 1; i <= 7; i++) {
    selectedWeek.push(DateTime.fromObject({ weekYear: weekYear, weekNumber: weekNumber, weekday: i }));
  }

  return selectedWeek;
}
