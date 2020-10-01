import { GET_EVENTS, REMOVE_EVENT, LOGIN } from '../constants/actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, events: action.events };
    case REMOVE_EVENT:
      return [state.filter(event => event.id !== action.id)];
    case LOGIN:
      return { ...state, isLogin: action.isLogin, user: action.user };
    default:
      return state;
  }
};

export default reducer;
