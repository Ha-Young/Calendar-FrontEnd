import * as types from "../constants/actionTypes";
/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
const initialState = {
  date: new Date(),
  isWeeklySchedule: false,
  isSchedule: true,
  events: {
    byIds: {},
    byDates: {},
    allIds: [],
    allDates: [],
  },
};

export default function reducer(state = initialState, action) {
  const year = state.date.getFullYear();
  const month = state.date.getMonth();
  const dateNumber = state.date.getDate();

  switch (action.type) {
    case types.UPDATE_LAST_WEEK:
      return {
        ...state,
        date: new Date(year, month, dateNumber - 7)
      };
    case types.UPDATE_NEXT_WEEK:
      return {
        ...state,
        date: new Date(year, month, dateNumber + 7)
      };
    case types.UPDATE_PREV_DAY:
      return {
        ...state,
        date: new Date(year, month, dateNumber - 1)
      };
    case types.UPDATE_NEXT_DAY:
      return {
        ...state,
        date: new Date(year, month, dateNumber + 1)
      };
    case types.UPDATE_DATE_WITH_TIME:
      return {
        ...state,
        date: new Date(action.payload)
      };
    case types.CHANGE_SCHEDULE_TYPE:
      const isWeeklySchedule = action.payload === "week" ? true : false;
      return {
        ...state,
        isWeeklySchedule
      };
    case types.SET_IS_SCHEDULE:
      const isSchedule = action.payload.includes("events") ? false : true;
      return {
        ...state,
        isSchedule
      };
    //이거 나중에 고쳐야됨
    //update가 더 맞지않냐?
    case types.ADD_EVENT:
      const date = action.payload.date;
      const id = action.payload.id;
      const datesOfDate = state.events.byDates[date] ?? [];
      const allIds = state.events.allIds.includes(action.payload.id)
        ? [...state.events.allIds]
        : [...state.events.allIds, action.payload.id];
      const allDates = state.events.allDates.includes(action.payload.date)
        ? [...state.events.allDates]
        : [...state.events.allDates, action.payload.date];

      return {
        ...state,
        events: {
          byIds: {
            ...state.events.byIds,
            [id]: action.payload,
          },
          byDates: {
            ...state.events.byDates,
            [date]: [...datesOfDate, action.payload]
          },
          allIds,
          allDates,
        },
      };
    default:
      return state;
  }
}
