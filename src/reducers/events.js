import { combineReducers } from 'redux';
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../constants/actionTypes';

const initialState = {};

const events = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_EVENT: 
      const newState = {...state};
      if (!newState[action.eventInfo.id.mainId]) {  
        newState[action.eventInfo.id.mainId] = [action.eventInfo];
        return newState;
      }
      newState[action.eventInfo.id.mainId].push(action.eventInfo);
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  events
});