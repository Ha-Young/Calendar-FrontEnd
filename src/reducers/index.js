import { combineReducers } from "redux";
import { currentDate, dateUnit } from "./date";
import { events } from "./events";

export default combineReducers({ currentDate, dateUnit, events });
