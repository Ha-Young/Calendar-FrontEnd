import { SELECT_DAILY_MODE, SELECT_WEEKLY_MODE } from "../constants/actionTypes";
import { addEvent, editEvent, deleteEvent } from "../actions/index";

const initialState = {
  calendarMode: SELECT_DAILY_MODE
};

function calendarModeReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAILY_MODE:
      return {
        ...state,
        calendarMode: SELECT_DAILY_MODE
      };
    case SELECT_WEEKLY_MODE:
      return {
        ...state,
        calendarMode: SELECT_WEEKLY_MODE
      }
    default:
      return state;
  }
}

export default calendarModeReducer;