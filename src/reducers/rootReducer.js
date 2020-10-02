import { combineReducers } from "redux";
import dailyEventReducer from "./dailyEventReducer";
import calendarModeReducer from "./calendarModeReducer";
import updateDateReducer from "./updateDateReducer";

const rootReducer = combineReducers({
  dailyEventReducer,
  calendarModeReducer,
  updateDateReducer
});

export default rootReducer;