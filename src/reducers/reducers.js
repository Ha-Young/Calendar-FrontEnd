import {
  LOGIN,
  GET_EVENTS,
  SET_DAY,
  SET_WEEK,
  SET_MONTH,
  SET_YEAR,
  SET_CALENDAR_TYPE
} from 'constants/actionTypes';

const initialState = {
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  calendarType: 'WEEK'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, events: action.events };
    case SET_DAY:
      return { ...state, day: action.day };
    case SET_WEEK:
      return { ...state, week: action.week };
    case SET_MONTH:
      return { ...state, month: action.month };
    case SET_YEAR:
      return { ...state, year: action.year };
    case SET_CALENDAR_TYPE:
      return { ...state, calendarType: action.calendarType };
    case LOGIN:
      return { ...state, isLogin: action.isLogin, user: action.user };
    default:
      return state;
  }
};

export default reducer;
