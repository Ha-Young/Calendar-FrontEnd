import { combineReducers } from "redux";
import events from "./events";
import login from "./login";
import notification from "./notification";

export default combineReducers({
  events,
  login,
  notification,
});
