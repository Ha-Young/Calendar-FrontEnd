import { combineReducers } from "redux";
import changeDate from "./events";

const rootReducer = combineReducers({ date: changeDate });

export default rootReducer;
