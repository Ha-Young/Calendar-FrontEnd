import { addDays, subDays } from 'date-fns';
import { PREV_PAGE, NEXT_PAGE, SET_WEEKLY_CALENDAR, SET_DAILY_CALENDAR } from '../constants/actionTypes';
import { now } from '../utils/date';

const ONE_DAY = 1;
const ONE_WEEK = 7;

const initialState = {
  currentType: {
    isDaily: true,
    term: ONE_DAY,
  },
  date: now
};

const changeCalendarState = (state = initialState, action) => {
  switch (action.type) {
    case PREV_PAGE: {
      return {
        ...state,
        date: subDays(state.date, state.currentType.term)
      };
    }
    case NEXT_PAGE: {
      return {
        ...state,
        date: addDays(state.date, state.currentType.term)
      };
    }
    case SET_WEEKLY_CALENDAR: {
      return {
        ...state,
        currentType: {
          isDaily: false,
          term: ONE_WEEK,
        }
      };
    }
    case SET_DAILY_CALENDAR: {
      return {
        ...state,
        currentType: {
          isDaily: true,
          term: ONE_DAY,
        }
      };
    }
    default:
      return state;
  }
};

export default changeCalendarState;
