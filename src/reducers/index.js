import { combineReducers } from "redux";
import onLoad from "./onLoad";
import calendar from "./calendar";

export default combineReducers({
  calendar,
  onLoad,
});
