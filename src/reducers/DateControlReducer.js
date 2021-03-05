import moment from "moment";
import { CALENDAR_MODE } from "../utils/constants";
import {
  CHANGE_CALENDAR_MODE,
  MOVE_TO_PREV_DATE,
  MOVE_TO_NEXT_DATE,
} from "../actions/actionTypes";

const initialState = {
  currentDate: moment().toISOString(),
  calendarMode: CALENDAR_MODE.DAILY,
}

export default function DateControlReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CALENDAR_MODE:
      return {
        ...state,
        calendarMode: action.calendarMode,
      }

    case MOVE_TO_PREV_DATE:
      return {
        ...state,
        currentDate: action.newDate,
      }

    case MOVE_TO_NEXT_DATE:
      return {
        ...state,
        currentDate: action.newDate,
      }

    default: return state;
  }
}
