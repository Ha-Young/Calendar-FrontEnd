import { combineReducers } from "redux";
import eventControl, { eventList } from "./events";

const rootReducer = combineReducers({ eventControl, eventList });
export default rootReducer;
