import { combineReducers } from "redux";
import { handleDateReducer, handleModalReducer } from "./clickEventsReducers";
import { eventInfoReducer } from "./EventInfoReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  events: handleDateReducer,
  modal: handleModalReducer,
  eventInfo: eventInfoReducer,
  logIn: authReducer,
});

export default rootReducer;
