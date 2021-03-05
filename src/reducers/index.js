import produce from "immer";
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
    case types.SET_EVENTS:
      const settedState = produce(state, draft => {
        action.payload.map(event => {
          draft.events.byIds[event.id] = event;
          draft.events.allIds.push(event.id);

          if (!draft.events.allDates.includes(event.date)) draft.events.allDates.push(event.date);
          if (!draft.events.byDates[event.date]) draft.events.byDates[event.date] = [];

          draft.events.byDates[event.date].push(event);
        });
      });

      return settedState;
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
      const addedState = produce(state, draft => {
        const id = action.payload.id;
        const date = action.payload.date;
        const allIdsOfEvents = draft.events.allIds;
        const allDatesOfEvents = draft.events.allDates;

        draft.events.byIds[id] = action.payload;

        if (!draft.events.byDates[date]) draft.events.byDates[date] = [];

        draft.events.byDates[date].push(action.payload);
        allIdsOfEvents.push(id);

        if (!allDatesOfEvents.includes(date)) allDatesOfEvents.push(date);
      });

      return addedState;
    case types.UPDATE_EVENT:
      if (action.payload === null) {
        return state;
      }

      const prevEvent = action.payload.prevEvent;
      const updatedEvent = action.payload.updatedEvent;

      const updatedState = produce(state, draft => {
        const id = updatedEvent.id;
        const date = updatedEvent.date;
        const prevDate = prevEvent.date;
        const filteredPrevEventsByDate = draft.events.byDates[prevDate]
          .filter(event => event.id !== id);

        draft.events.allDates = draft.events.allDates.filter(date => date !== prevDate);
        draft.events.byIds[id] = updatedEvent;

        draft.events.byDates[prevDate] = filteredPrevEventsByDate.length === 0 ? null : filteredPrevEventsByDate;

        if (!draft.events.byDates[date]) draft.events.byDates[date] = [];

        draft.events.byDates[date].push(updatedEvent);

        if (!draft.events.allDates.includes(date)) draft.events.allDates.push(date);
      });

      return updatedState;
    case types.REMOVE_EVENT:
      const removedState = produce(state, draft => {
        const removedEventId = action.payload.id;
        const removedEventDate = action.payload.date;
        const filteredEventsByDate = draft.events.byDates[removedEventDate].filter(event => event.id !== action.payload.id);

        delete draft.events.byIds[removedEventId];
        draft.events.allIds = draft.events.allIds.filter(id => id !== removedEventId);
        draft.events.byDates[removedEventDate] = filteredEventsByDate.length === 0 ? null : filteredEventsByDate;
        draft.events.allDates = draft.events.allDates.filter(date => {
          if (filteredEventsByDate.length) {
            return true;
          }

          return date !== removedEventDate
        });
      });

      return removedState;
    default:
      return state;
  }
}
