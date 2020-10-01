import { combineReducers } from "redux";
import getMonthlyDates, { getWeeklyDates } from '../utils/date';
import { CHANGE_MONTH, NEXT_WEEK, PREV_WEEK } from '../constants/actionTypes';

const handleMonthlyDates = (state = getMonthlyDates(), action) => {
  console.log(action, 'act')
  switch (action.type) {
    case CHANGE_MONTH:
      return {
        ...state,
        thisMonth: getMonthlyDates(action.change).thisMonth,
        monthlyDates: getMonthlyDates(action.change).monthlyDates,
      };
    default:
      return state;
  }
};

const handleWeeklyDates = (state = getWeeklyDates(), action) => {
  switch (action.type) {
    case NEXT_WEEK:
      return {
        ...state,
        thisMonth: getWeeklyDates(action.change).thisMonth,
        weeklyDates: getWeeklyDates(action.change).weeklyDates,

      };
    case PREV_WEEK:
      return {
        ...state,
        thisMonth: getWeeklyDates(action.change).thisMonth,
        weeklyDates: getWeeklyDates(action.change).weeklyDates,
      }
    default:
      return state;
  }
};

export default combineReducers({
  handleMonthlyDates,
  handleWeeklyDates
});