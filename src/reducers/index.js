import { combineReducers } from "redux";
import changeCalendarState from "./calendars";
import changeEventState from "./events";

export default combineReducers({
  event: changeEventState,
  calendar: changeCalendarState
});
