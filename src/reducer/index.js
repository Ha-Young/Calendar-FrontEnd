import { combineReducers } from 'redux';

import userState from './userState';
import calendarState from './calendarState';
import createEventState from './createEventState';

export default combineReducers({
  ...userState,
  ...calendarState,
  ...createEventState,
});
