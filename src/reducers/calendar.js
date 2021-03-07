import * as actionTypes from "constants/actionTypes";

import { addDay, subDay, addWeek, subWeek } from "utils";

const initialState = {
  events: [],
  currentTime: new Date(),
  calendarMode: "day",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.NEXT:
      return {
        ...state,
        currentTime:
          state.calendarMode === "day"
            ? addDay(state.currentTime)
            : addWeek(state.currentTime),
      };

    case actionTypes.PREV:
      return {
        ...state,
        currentTime:
          state.calendarMode === "day"
            ? subDay(state.currentTime)
            : subWeek(state.currentTime),
      };

    case actionTypes.TO_DAY_CALENDAR:
      return {
        ...state,
        calendarMode: "day",
      };

    case actionTypes.TO_WEEK_CALENDAR:
      return {
        ...state,
        calendarMode: "week",
      };

    case actionTypes.ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case actionTypes.DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };

    case actionTypes.EDIT_EVENT:
      return {
        ...state,
        events: state.events.map((event) => {
          if (event.id === action.payload.eventId) {
            return (event = Object.assign(event, action.payload.event));
          } else {
            return (event = Object.assign(event, event));
          }
        }),
      };

    case actionTypes.RECEIVE_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
}
