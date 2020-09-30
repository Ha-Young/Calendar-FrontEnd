import { ADD_EVENT, REMOVE_EVENT, LOGIN } from '../constants/actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EVENT:
      const event = {
        id: Date.now(),
        title: action.title,
        description: action.description,
        date: action.date
      };
      return { ...state, event: event };
    case REMOVE_EVENT:
      return [state.filter(event => event.id !== action.id)];
    case LOGIN:
      return { ...state, boolean: action.boolean };
    default:
      return state;
  }
};

export default reducer;
