import { combineReducers } from "redux";
import EventInfoControlReducer from "./EventInfoControlReducer";
import DateControlReducer from "./DateControlReducer";

const allReducers = combineReducers({
  EventInfoControlReducer, DateControlReducer,
})

export default allReducers;
