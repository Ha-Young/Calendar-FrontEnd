import { getWeek, getDay, today } from "../utils/date";
import * as types from "../constants/actionTypes";

const initialState = {
  isDaily: false,
  date: today,
  selectedDate: today,
  daily: getDay(today),
  weekly: getWeek(today),
};

export const calendarDate = (state = initialState, actions) => {
  switch (actions.type) {
    case types.CHANGE_CALENDAR_TYPE: {
      return {
        ...state,
        isDaily: actions.payLoad,
      };
    }
    case types.CHANGE_CALENDAR_PAGE: {
      return {
        ...state,
        ...actions.payLoad,
      };
    }
    default:
      return state;
  }
};

export default calendarDate;
