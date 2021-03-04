import {
  NEXT,
  PREV,
  TO_DAY_CALENDAR,
  TO_WEEK_CALENDAR,
  ADD_EVENT,
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

    default:
      return state;
  }
}
