import { combineReducers } from "redux";
import events from "./events";
import login from "./login";

export default combineReducers({
  events,
  login,
});
