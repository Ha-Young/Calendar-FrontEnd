import moment from "moment";
import {
  GET_STORED_EVENTS_DATA,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  USER_LOGIN,
  USER_LOGOUT,
  CLICK_PREV_DATE_BUTTON,
  CLICK_NEXT_DATE_BUTTON,
  CHANGE_WEEKLY_VIEW,
  SHOW_ERROR_MESSAGE,
} from "../actions/constants";

export const eventList = (state = [], action) => {
  switch (action.type) {
    case GET_STORED_EVENTS_DATA:
      return state.concat(action.data);
    case ADD_EVENT:
      return [
        action.eventDetails,
        ...state,
      ];
    case UPDATE_EVENT:
      return state.map((item) => {
        if (item.id !== action.eventDetails.id) {
          return item;
        }
        return action.eventDetails;
      });
    case DELETE_EVENT:
      return state.filter((item) => {
        return item.id !== action.eventDetails.id;
      });
    default:
      return state;
  }
};

const initialState = {
  selectedDate: moment().format("YYYY-MM-DD"),
  isLoggedIn: false,
  isDailyView: true,
  errorMessage: null,
};

const eventControl = (state = initialState, action) => {
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
    case CLICK_PREV_DATE_BUTTON:
      return {
        ...state,
        selectedDate:
          moment(state.selectedDate)
            .subtract(action.days, "days")
            .format("YYYY-MM-DD"),
      };
    case CLICK_NEXT_DATE_BUTTON:
      return {
        ...state,
        selectedDate:
          moment(state.selectedDate)
            .add(action.days, "days")
            .format("YYYY-MM-DD"),
      };
    case CHANGE_WEEKLY_VIEW:
      return {
        ...state,
        isDailyView: !state.isDailyView,
      };
    case SHOW_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

export default eventControl;
