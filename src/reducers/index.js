import { combineReducers } from 'redux';

import modes from './modes';
import pager from './pager';
import date from './date';

const rootReducer = combineReducers({
  modes,
  date,
  pager,
});

export default rootReducer;
