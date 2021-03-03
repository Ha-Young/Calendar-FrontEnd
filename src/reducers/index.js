import { combineReducers } from "redux";

import { currentDate, viewOption } from "./common";
import date from "./date";
import events from "./events";

export default combineReducers({
  viewOption,
  currentDate,
  events,
  date,
});
