import { format, addDays, addWeeks, startOfWeek } from 'date-fns';
import {
  UPDATE_TIMESPAN,
  INCREMENT_DATE,
  DECREMENT_DATE,
  INCREMENT_WEEK,
  DECREMENT_WEEK
} from '../constants/actionTypes';

const initialState = {
  timespan: '',
  date: format(new Date(), 'yyyy-MM-dd'),
  dateCounter: 0,
  week: getWeek(new Date()),
  weekCounter: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TIMESPAN:
      return {
        ...state,
        timespan: action.timespan
      };
    case INCREMENT_DATE:
      const dateIncremented = addDays(new Date(), state.dateCounter + 1);
      return {
        ...state,
        date: format(dateIncremented, 'yyyy-MM-dd'),
        dateCounter: state.dateCounter + 1
      };
    case DECREMENT_DATE:
      const dateDecremented = addDays(new Date(), state.dateCounter - 1);
      return {
        ...state,
        date: format(dateDecremented, 'yyyy-MM-dd'),
        dateCounter: state.dateCounter - 1
      };
    case INCREMENT_WEEK:
      const weekIncremented = getWeek(addWeeks(new Date(), state.weekCounter + 1));
      return {
        ...state,
        week: weekIncremented,
        weekCounter: state.weekCounter + 1
      };
    case DECREMENT_WEEK:
      const weekDecremented = getWeek(addWeeks(new Date(), state.weekCounter - 1));
      return {
        ...state,
        week: weekDecremented,
        weekCounter: state.weekCounter - 1
      };
    default:
      return state;
  }
};

function getWeek (date) {
  const monday = startOfWeek(date, {weekStartsOn: 1});
  const week = [];

  for (let i = 0; i < 7; i++) {
    week.push(format(addDays(monday, i), 'yyyy/MM/dd'));
  }

  return week;
}
