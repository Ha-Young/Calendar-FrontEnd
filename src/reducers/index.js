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
    case types.ADD_EVENT:
      //error handling추가해야됨 update도 같이 ㅇㅇ
      // ex) 겹치는 시간대
      const eventsOfDate = state.events.byDates[action.payload.date] ?? [];

      return {
        ...state,
        events: {
          byIds: {
            ...state.events.byIds,
            [action.payload.id]: action.payload,
          },
          byDates: {
            ...state.events.byDates,
            [action.payload.date]: [...eventsOfDate, action.payload]
          },
          allIds: [...state.events.allIds, action.payload.id],
          allDates: [...state.events.allDates, action.payload.date],
        },
      };
    case types.UPDATE_EVENT:
      if (action.payload.updatedEvent === null) {
        return state;
      }

      const prevEventsOfDate = state.events.byDates[action.payload.prevEvent.date];
      const filteredPrevEventsOfDate = prevEventsOfDate.filter(event => event.id !== action.payload.prevEvent.id);
      const updatedEventsOfDate = state.events.byDates[action.payload.updatedEvent.date] ?? [];
      const filtedAllDates = state.events.allDates.filter(date => date !== action.payload.prevEvent.date);

      return {
        ...state,
        events: {
          ...state.events,
          byIds: {
            ...state.events.byIds,
            [action.payload.updatedEvent.id]: action.payload.updatedEvent,
          },
          byDates: {
            ...state.events.byDates,
            [action.payload.prevEvent.date]: filteredPrevEventsOfDate.length === 0 ? null : filteredPrevEventsOfDate,
            [action.payload.updatedEvent.date]: [...updatedEventsOfDate, action.payload.updatedEvent]
          },
          allDates: [...filtedAllDates, action.payload.updatedEvent.date],
        },
      };
    case types.REMOVE_EVENT:
      const eventsByIds = { ...state.events.byIds };
      delete eventsByIds[action.payload.id];
      const eventsByDate = [...state.events.byDates[action.payload.date]];
      const filteredEventsByDate = eventsByDate.filter(event => event.id !== action.payload.id);

      return {
        ...state,
        events: {
          byIds: eventsByIds,
          byDates: {
            ...state.events.byDates,
            [action.payload.date]: filteredEventsByDate.length === 0 ? null : filteredEventsByDate,
          },
          allDates: state.events.allDates.filter(date => {
            if (filteredEventsByDate.length) {
              return true;
            }

            return date !== action.payload.date
          }),
          allIds: state.events.allIds.filter(id => id !== action.payload.id)
        }
      };

    default:
      return state;
  }
}
