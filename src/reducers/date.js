import { combineReducers } from 'redux';
import getMonthlyDates, { getWeeklyDates } from '../utils/date';
import { CHANGE_MONTH, CHANGE_WEEK, CHANGE_DAY } from '../constants/actionTypes';

const handleMonthlyDates = (state = getMonthlyDates(), action) => {
  console.log(state, 'month')
  switch (action.type) {
    case CHANGE_MONTH:
      return {
        ...state,
        thisMonth: getMonthlyDates(action.change).thisMonth,
        monthlyDates: getMonthlyDates(action.change).monthlyDates,
      };
    case CHANGE_DAY:
      return {
        ...state, 
        today: action.change
      };
    default:
      return state;
  }
};

const handleWeeklyDates = (state = getWeeklyDates(), action) => {
  console.log(state, 'week')
  switch (action.type) {
    case CHANGE_WEEK:
      return {
        ...state,
        thisMonth: getWeeklyDates(action.change).thisMonth,
        weeklyDates: getWeeklyDates(action.change).weeklyDates,
      }
    case CHANGE_DAY:
      return {
        ...state, 
        today: action.change
      };
    default:
      return state;
  }
};

export default combineReducers({
  handleMonthlyDates,
  handleWeeklyDates
});