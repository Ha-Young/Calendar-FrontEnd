import { combineReducers } from "redux";
import * as dayjs from "dayjs";
import dateFormatter from "../utils/dateFormatter";
import createStringifiedNewDate from "../utils/createStringifiedNewDate";
import {
  VIEWMODE_DAILY,
  VIEWMODE_WEEKLY,
  SHOW_DAILY,
  SHOW_WEEKLY,
  LOGIN,
  LOGOUT,
  SHOW_PREVIOUS_DAY,
  SHOW_NEXT_DAY,
  SHOW_PREVIOUS_WEEK,
  SHOW_NEXT_WEEK,
  FETCH_EVENTS,
} from "../constants";

const viewMode = (state = VIEWMODE_DAILY, action) => {
  switch (action.type) {
    case SHOW_DAILY:
      return state = VIEWMODE_DAILY;
    case SHOW_WEEKLY:
      return state = VIEWMODE_WEEKLY;
    default:
      return state;
  }
};

const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return state = true;
    case LOGOUT:
      return state = false;
    default:
      return state;
  }
};

const displayDate = (state = dayjs().format(), action) => {
  let previousDate = state.slice(0, 10).split("-");
  let newDate;

  switch (action.type) {
    case SHOW_PREVIOUS_DAY:
      return state = dateFormatter(createStringifiedNewDate(previousDate, SHOW_PREVIOUS_DAY));
    case SHOW_NEXT_DAY:
      return state = dateFormatter(createStringifiedNewDate(previousDate, SHOW_NEXT_DAY));
    case SHOW_PREVIOUS_WEEK:
      for (let i = 0; i < 7; i++) {
        newDate = createStringifiedNewDate(previousDate, SHOW_PREVIOUS_WEEK);
        previousDate = dateFormatter(newDate).slice(0, 10).split("-");
      }
      return state = dateFormatter(newDate);
    case SHOW_NEXT_WEEK:
      for (let i = 0; i < 7; i++) {
        newDate = createStringifiedNewDate(previousDate, SHOW_NEXT_WEEK);
        previousDate = dateFormatter(newDate).slice(0, 10).split("-");
      }
      return state = dateFormatter(newDate);
    default:
      return state;
  }
};

const eventData = (state = null, action) => {
  switch (action.type) {
    case FETCH_EVENTS:
      return state = action.data;
    default:
      return state;
  }
};

export default combineReducers({
  viewMode,
  isLoggedIn,
  displayDate,
  eventData,
});
