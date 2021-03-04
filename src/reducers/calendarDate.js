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

// export const interval = (state = DAILY_INTERVAL, actions) => {
//   switch (actions.type) {
//     case types.CHANGE_CALENDAR_TYPE:
//       return state = actions.payLoad.interval;
//     default:
//       return state;
//   }
// };

// export const currentDate = (state = new Date(), actions) => {
//   switch (actions.type) {
//     case types.ADD_DATE:
//       return state;
//     case types.SUBTRACT_DATE:
//       return state;
//     default:
//       return state;
//   }
// };


// export const getIsDailyCalendar = (state) => state.isDaily;
// export const getCalendarInterval = (state) => state.interval;
