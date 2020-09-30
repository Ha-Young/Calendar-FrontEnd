import { RECEIVE_SCHEDULE } from '../constants/actionTypes';
import { combineReducers } from 'redux';

export const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SCHEDULE:
      return {
        ...action.schedules
      };
    default:
      return state;
  }
};

export default combineReducers({
  byId
});
