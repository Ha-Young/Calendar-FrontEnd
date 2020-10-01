import {
  LOGIN,
  GET_EVENTS,
  REMOVE_EVENT,
  SET_DAY,
  SET_DAYS,
  SET_MONTH
} from '../constants/actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, events: action.events };
    case REMOVE_EVENT:
      return [state.filter(event => event.id !== action.id)];
    case SET_DAY:
      return { ...state, day: action.day }; //val
    case SET_DAYS:
      return { ...state, day: action.days }; //obj
    case SET_MONTH:
      return { ...state, day: action.month };//val
    case LOGIN:
      return { ...state, isLogin: action.isLogin, user: action.user };
    default:
      return state;
  }
};

export default reducer;
