import {
  LOGIN,
  GET_EVENTS,
  REMOVE_EVENT,
  SET_DAY,
  SET_MONTH,
  SET_YEAR,
  SET_CALENDAR_TYPE
} from '../constants/actionTypes';

const initialState = {
  calendarType: 'WEEK',
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, events: action.events };
    case REMOVE_EVENT:
      return [state.filter(event => event.id !== action.id)];
    case SET_DAY:
      return { ...state, day: action.day }; //val
    case SET_MONTH:
      return { ...state, month: action.month };//val
    case SET_YEAR:
      return { ...state, year: action.year };//val
    case SET_CALENDAR_TYPE:
      return { ...state, calendarType: action.calendarType };//val
    case LOGIN:
      return { ...state, isLogin: action.isLogin, user: action.user };
    default:
      return state;
  }
};

export default reducer;
