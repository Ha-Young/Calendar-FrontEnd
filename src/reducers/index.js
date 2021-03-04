import { combineReducers } from "redux";
import calendar from "./calendar";
import event from "./event";

export default combineReducers({
  calendar,
  event,
});
