import { combineReducers } from "redux";
import events from "./events";
import login from "./login";
import error from "./error";

export default combineReducers({
  events,
  login,
  error,
});
