import {
  LOGIN,
  GET_EVENTS,
  REMOVE_EVENT,
  SET_DAY,
  SET_DAYS,
  SET_MONTH,
  SET_YEAR
} from '../constants/actionTypes';

import format from 'date-fns/format';

const year = format(new Date(), 'yyyy');
const month = format(new Date(), 'MM');
const day = format(new Date(), 'dd');

const initialState = {
  day: day,
  days: {
    mon: day,
    tue: day,
    wen: day,
    thu: day,
    fri: day,
    sat: day,
    sun: day
  },
  month: month,
  year: year
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state, events: action.events };
    case REMOVE_EVENT:
      return [state.filter(event => event.id !== action.id)];
    case SET_DAY:
      return { ...state, day: action.day }; //val
    case SET_DAYS:
      return { ...state, days: action.days }; //obj
    case SET_MONTH:
      return { ...state, month: action.month };//val
    case SET_YEAR:
      return { ...state, year: action.year };//val
    case LOGIN:
      return { ...state, isLogin: action.isLogin, user: action.user };
    default:
      return state;
  }
};

export default reducer;
