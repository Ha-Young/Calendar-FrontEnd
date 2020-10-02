import { addDays, subDays } from 'date-fns';
import { PREV_PAGE, NEXT_PAGE, SET_WEEKLY_CALENDAR, SET_DAILY_CALENDAR } from '../constants/actionTypes';
import { now } from '../utils/date';

const initialState = {
  currentType: {
    isDaily: true,
    point: 1,
  },
  date: now
};

const changeCalendarState = (state = initialState, action) => {
  switch (action.type) {
    case PREV_PAGE: {
      console.log(state.date);
      return {
        ...state,
        date: subDays(state.date, state.currentType.point)
      };
    }
    case NEXT_PAGE: {
      return {
        ...state,
        date: addDays(state.date, state.currentType.point)
      };
    }
    case SET_WEEKLY_CALENDAR: {
      return {
        ...state,
        currentType: {
          isDaily: false,
          point: 7,
        }
      };
    }
    case SET_DAILY_CALENDAR: {
      return {
        ...state,
        currentType: {
          isDaily: true,
          point: 1,
        }
      };
    }
    default:
      return state;
  }
};

export default changeCalendarState;
