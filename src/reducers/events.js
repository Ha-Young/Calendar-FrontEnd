import { ADD_EVENT, CHANGE_EVENT, REMOVE_EVENT, RECEIVE_EVENT } from '../constants/actionTypes';

const initialState = {
  events: {}
};

const changeEventState = (state = initialState, action) => {
  const { payLoad, type } = action;
  switch (type) {
    case ADD_EVENT,
        CHANGE_EVENT: {
      return {
        events: {...state.events, payLoad}
      };
    }
    case REMOVE_EVENT: {
      return {
        events:
        {
          ...state.events,
          payLoad : null
        }
      };
    }
    case RECEIVE_EVENT: {
      return {
        ...state,
        ...action.events.reduce((obj, event) => {
          obj[event[0]] = event;
          return obj;
        }, {})
      };
    }
    default:
      return state;
  }
};

export default changeEventState;
