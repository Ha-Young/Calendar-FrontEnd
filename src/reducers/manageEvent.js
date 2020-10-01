import {
  ADD_EVENT ,
  USER_LOGIN,
  USER_LOGOUT,
  CLICK_PREV_BUTTON,
  CLICK_NEXT_BUTTON,
  CHANGE_WEEKLY_VIEW,
  GET_EVENTS_DATA,
  UPDATE_EVENT,
} from "../actions/constants";
import moment from "moment";

const initialState = {
  date: moment().format("YYYY-MM-DD"),
  isLoggedIn: false,
  isDailyView: true,
};

export const eventDetail = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      return [
        action.eventDetails,
        ...state
      ];
    case GET_EVENTS_DATA:
      return state.concat(action.data);
    case UPDATE_EVENT:
      return state.map((item) => {
        if (item.id !== action.eventDetails.id) {
          return item;
        }
        return action.eventDetails;
      });
    default:
      return state;
  }
};

const manageEvent = (state = initialState, action) => {
  switch (action.type) {
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
        date: moment(state.date).subtract(action.days, "days").format("YYYY-MM-DD"),
      };
    case CLICK_NEXT_BUTTON:
      return {
        ...state,
        date: moment(state.date).add(action.days, "days").format("YYYY-MM-DD"),
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