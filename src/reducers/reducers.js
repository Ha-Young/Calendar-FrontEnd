import { ADD_EVENT, REMOVE_EVENT, LOGIN } from '../constants/actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EVENT:
      const events = [{
        id: Date.now(),
        title: action.title,
        description: action.description,
        startDate: action.startDate,
        endDate: action.endDate
      }, ...state];
      return events;
    case REMOVE_EVENT:
      return [state.filter(event => event.id !== action.id)];
    case LOGIN:
      return {boolean: action.boolean};
      case LOGIN:
        return {boolean: action.boolean};
    default:
      return state;
  }
};

export default reducer;
