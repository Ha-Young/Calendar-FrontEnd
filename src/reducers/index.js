import { combineReducers } from "redux";

import { currentDate, viewOption } from "./common";
import events from "./events";

export default combineReducers({
  viewOption,
  currentDate,
  events,
});
