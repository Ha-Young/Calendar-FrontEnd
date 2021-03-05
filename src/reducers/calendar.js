import { subDate, addDate, getCurrentWeek, getLastWeek, getNextWeek } from "../utils/SetDate";

const today = new Date();

const initialState = {
  calendarMode: "daily",
  today: today,
  selectedDate: today,
  week: getCurrentWeek(today),
};

export default function calendar(state = initialState, action) {
  switch (action.type) {
    case "SET_DAILY_CALENDAR_MODE":
      return {
        ...state,
        calendarMode: "daily"
      }
    case "SET_WEEKLY_CALENDAR_MODE":
      return {
        ...state,
        calendarMode: "weekly",
        week: getCurrentWeek(state.selectedDate),
      }
    case "GO_PREV_DATE":
      return {
        ...state,
        selectedDate: subDate(state.selectedDate, 1),
      }
    case "GO_NEXT_DATE":
      return {
        ...state,
        selectedDate: addDate(state.selectedDate, 1),
      }
    case "GO_LAST_WEEK":
      return {
        ...state,
        week: getLastWeek(state.week),
        selectedDate: subDate(state.selectedDate, 7),
      }
    case "GO_NEXT_WEEK":
      return {
        ...state,
        week: getNextWeek(state.week),
        selectedDate: addDate(state.selectedDate, 7),
      }
    case "SET_SELECTED_DATE":
      return {
        ...state,
        selectedDate: action.date,
        week: getCurrentWeek(action.date),
      }
    default:
      return state;
  }
};
