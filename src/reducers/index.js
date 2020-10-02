import { combineReducers } from 'redux';
import dates from './date';
import events from './events';

export default combineReducers({
  dates,
  events,
});