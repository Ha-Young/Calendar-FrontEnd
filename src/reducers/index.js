import { combineReducers } from "redux";
import * as dayjs from "dayjs";
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
      newDate = [previousDate[0], previousDate[1], `${Number(previousDate[2]) - 1}`].join("-");
      return state = dayjs(newDate).format();
    case SHOW_NEXT_DAY:
      newDate = [previousDate[0], previousDate[1], `${Number(previousDate[2]) + 1}`].join("-");
      return state = dayjs(newDate).format();
    case SHOW_PREVIOUS_WEEK:
      for (let i = 0; i < 7; i++) {
        newDate = [previousDate[0], previousDate[1], `${Number(previousDate[2]) - 1}`].join("-");
        previousDate = dayjs(newDate).format().slice(0, 10).split("-");
      }
      return state = dayjs(newDate).format();
    case SHOW_NEXT_WEEK:
      for (let i = 0; i < 7; i++) {
        newDate = [previousDate[0], previousDate[1], `${Number(previousDate[2]) + 1}`].join("-");
        previousDate = dayjs(newDate).format().slice(0, 10).split("-");
      }
      return state = dayjs(newDate).format();
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
