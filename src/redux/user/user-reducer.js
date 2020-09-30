import * as types from './user-actionTypes';

const INITIAL_STATE = {
  currentUser: null,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default user;
