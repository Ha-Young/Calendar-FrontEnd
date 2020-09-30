import { combineReducers } from 'redux';
import manageEvent, { eventDetail } from './manageEvent';

const rootReducer = combineReducers({ manageEvent, eventDetail });
export default rootReducer;
