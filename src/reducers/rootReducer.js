import { combineReducers } from 'redux';
import calendarModeReducer from './calendarModeReducer';
import currentDateReducer from './currentDateReducer';
import eventPageReducer from './eventPageReducer';
import eventDataReducer from './eventDataReducer';

const rootReducer = combineReducers({
  calendarModeReducer,
  currentDateReducer,
  eventPageReducer,
  eventDataReducer,
});

export default rootReducer;
