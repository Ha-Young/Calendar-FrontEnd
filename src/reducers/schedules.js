import { combineReducers } from 'redux';
import { RECEIVE_SCHEDULE } from '../constants/actionTypes';

const initialState = {
  schedules: []
};

export const byId = (state = initialState, action) => {
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
