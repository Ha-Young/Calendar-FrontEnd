import { combineReducers } from 'redux';
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../constants/actionTypes';

const handleEvent = (state, action) => {
  switch (action.type) {
    case CREATE_EVENT: 
      const newState = {...state};
      if (!newState.totalEvent[action.eventInfo.id.mainId]) {  
        newState.totalEvent[action.eventInfo.id.mainId] = [action.eventInfo]
        return newState;
      }
      newState.totalEvent[action.eventInfo.id.mainId].push(action.eventInfo);
      return newState;
    default:
      state = {
        totalEvent: {}
      };
      return state;
  }
};

export default combineReducers({
  handleEvent
});