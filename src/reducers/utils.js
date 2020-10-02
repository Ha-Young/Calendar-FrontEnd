import { format, addDays, startOfWeek } from 'date-fns';
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
  week: getWeek(),
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
      const addDate = addDays(new Date(), state.dateCounter + 1);
      return {
        ...state,
        date: format(addDate, 'yyyy-MM-dd'),
        dateCounter: state.dateCounter + 1
      };
    case DECREMENT_DATE:
      const subDate = addDays(new Date(), state.dateCounter - 1);
      return {
        ...state,
        date: format(subDate, 'yyyy-MM-dd'),
        dateCounter: state.dateCounter - 1
      };
    case INCREMENT_WEEK:
      return {
        // TODO
      };
    case DECREMENT_WEEK:
      return {
        // TODO
      };
    default:
      return state;
  }
};

function getWeek () {
  const monday = startOfWeek(new Date(), {weekStartsOn: 1});
  const week = [];

  for (let i = 0; i < 7; i++) {
    week.push(format(addDays(monday, i), 'yyyy/MM/dd'));
  }

  return week;
}
