import { combineReducers } from 'redux';

import modes from './modes';
import pager from './pager';
import date from './date';
import details from './details';

const rootReducer = combineReducers({
  modes,
  date,
  pager,
  details,
});

export default rootReducer;
