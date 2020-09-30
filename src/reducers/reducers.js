import { ADD_EVENT, REMOVE_EVENT, LOGIN } from '../constants/actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EVENT:
      const event = {
        id: String(Date.now()),
        title: action.title,
        description: action.description,
        date: action.date,
        user: state.user
      };
      return { ...state, events: event };
    case REMOVE_EVENT:
      return [state.filter(event => event.id !== action.id)];
    case LOGIN:
      return { ...state, isLogin: action.isLogin, user: action.user };
    default:
      return state;
  }
};

export default reducer;
