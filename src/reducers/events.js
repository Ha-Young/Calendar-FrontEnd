import { combineReducers } from 'redux';
import { RECEIVE_EVENTS, ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../actions';

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
    case ADD_EVENT:
    case UPDATE_EVENT:
      return {
        ...state,
        ...action.events
      };
    case DELETE_EVENT:
      const copiedState = Object.assign({}, state);
      delete copiedState[action.events];
      return copiedState;
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_EVENTS:
      const newState = [];
      for (const key in action.events) newState.push(key);
      // return [
      //   ...state,
      //   ...newState
      // ];
      return newState;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds
});

export const getEventById = (state, id) => (state[id]);

export const getEventListByDate = ({ byId, allIds }, target) => {
  const filtered = allIds.reduce((arr, id) => {
    if (byId[id].date === target) {
      arr.push(byId[id]);
    }
    return arr;
  }, []);

  return filtered;
}
