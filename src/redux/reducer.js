import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import calendarReducer from './calendar/calendar.reducer';

export default combineReducers({
  user: userReducer,
  calendar: calendarReducer,
});
