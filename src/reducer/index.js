import { combineReducers } from 'redux';

import userState from './userState';
import calendarState from './calendarState';

export default combineReducers({
  ...userState,
  ...calendarState,
});
