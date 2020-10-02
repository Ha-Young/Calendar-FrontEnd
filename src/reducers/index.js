import { combineReducers } from 'redux';

import events from './events';
import { dateInfo } from './dateInfo';

export default combineReducers({
  dateInfo,
  events,
});
