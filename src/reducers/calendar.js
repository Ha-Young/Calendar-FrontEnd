import {
  NEXT,
  PREV,
  TO_DAY_CALENDAR,
  TO_WEEK_CALENDAR,
} from "../actions/index";

import { addDay, subDay, addWeek, subWeek } from "../utils/utils";

const initialState = { currentTime: new Date(), isDayCalendarShown: true };

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

    default:
      return state;
  }
}
