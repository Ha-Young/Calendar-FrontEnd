import {
  ADD_EVENT ,
  USER_LOGIN,
  USER_LOGOUT,
  CLICK_PREV_BUTTON,
  CLICK_NEXT_BUTTON,
  CHANGE_WEEKLY_VIEW,
} from "../actions/constants";
import moment from "moment";

const initialState = {
  inputs: {},
  date: moment().format("YYYY-MM-DD"),
  isLoggedIn: false,
  isDailyView: true,
};

const manageEvent = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        inputs: action.inputs,
        id: Date.now(),
      };
    case USER_LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case CLICK_PREV_BUTTON:
      return {
        ...state,
        date: moment(state.date).subtract(1, "days").format("YYYY-MM-DD"),
      };
    case CLICK_NEXT_BUTTON:
      return {
        ...state,
        date: moment(state.date).add(1, "days").format("YYYY-MM-DD"),
      };
    case CHANGE_WEEKLY_VIEW:
      return {
        ...state,
        isDailyView: !state.isDailyView,
      }
    default:
      return state;
  }
};

export default manageEvent;
