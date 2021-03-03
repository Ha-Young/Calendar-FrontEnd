import { combineReducers } from "redux";
import { SET_CURRENT_DAY, SET_CURRENT_WEEK } from "../constants/actionTypes";

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

export default combineReducers({
  currentDay,
  currentWeek,
});
