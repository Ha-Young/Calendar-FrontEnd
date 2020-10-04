import { combineReducers } from 'redux';
import { RECEIVE_EVENTS, ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../actions';

const byId = (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_EVENTS:
    case ADD_EVENT:
    case UPDATE_EVENT:
      return {
        ...state,
        ...payload.event
      };
    case DELETE_EVENT:
      const copiedState = Object.assign({}, state);
      delete copiedState[payload];
      return copiedState;
    default:
      return state;
  }
};

const allIds = (state = [], { type, payload }) => {
  switch (type) {
    case RECEIVE_EVENTS:
      return Object.keys(payload.event);
    case DELETE_EVENT:
      const copiedState = state.slice();
      return copiedState.filter((id) => id !== payload.event);
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
};
