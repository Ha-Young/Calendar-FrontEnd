import {
  NEXT,
  PREV,
  TO_DAY_CALENDAR,
  TO_WEEK_CALENDAR,
  ADD_EVENT,
  DELETE_EVENT,
  EDIT_EVENT,
  RECEIVE_EVENTS,
} from "../actions/index";

import { addDay, subDay, addWeek, subWeek, format } from "../utils/utils";

const initialState = {
  events: [],
  currentTime: new Date(),
  isDayCalendarShown: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
        currentTime: state.isDayCalendarShown
          ? addDay(state.currentTime)
          : addWeek(state.currentTime),
      };

    case PREV:
      return {
        ...state,
        currentTime: state.isDayCalendarShown
          ? subDay(state.currentTime)
          : subWeek(state.currentTime),
      };

    case TO_DAY_CALENDAR:
      return {
        ...state,
        isDayCalendarShown: true,
      };

    case TO_WEEK_CALENDAR:
      return {
        ...state,
        isDayCalendarShown: false,
      };

    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };

    case EDIT_EVENT:
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

    //firebase 데이터를 받아와서 리덕스 스토어에 fetch 넣어야됨

    case RECEIVE_EVENTS:
      console.log("in redux", action.payload);

      return {
        ...state,
        events: action.payload,
      };

    default:
      return state;
  }
}
