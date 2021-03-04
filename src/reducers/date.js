import { combineReducers } from "redux";
import { SET_CURRENT_DAY, SET_CURRENT_WEEK, SET_IS_WEEK_MODE } from "../constants/actionTypes";

const currentDay = (state = new Date(), action) => {
  switch (action.type) {
    case SET_CURRENT_DAY:
      return action.date;
    default:
      return state;
  }
}

const currentWeek = (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_WEEK:
      return action.week;
    default:
      return state;
  }
}

const isWeekMode = (state = true, action) => {
  switch (action.type) {
    case SET_IS_WEEK_MODE:
      return action.isWeekMode;
    default:
      return state;
  }
}

export default combineReducers({
  currentDay,
  currentWeek,
  isWeekMode,
});
