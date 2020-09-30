import {
  ADD_EVENT,
  USER_LOGIN,
  USER_LOGOUT,
  CLICK_PREV_BUTTON,
  CLICK_NEXT_BUTTON,
  CHANGE_WEEKLY_VIEW,
  GET_EVENTS_DATA,
} from "./constants";

export const addEvent = (eventDetails) => {
  return {
    type: ADD_EVENT,
    eventDetails
  };
};

export const userLogIn = () => {
  return {
    type: USER_LOGIN,
  };
};

export const userLogOut = () => {
  return {
    type: USER_LOGOUT,
  };
};

export const clickPrevButton = (days) => {
  return {
    type: CLICK_PREV_BUTTON,
    days
  };
};

export const clickNextButton = (days) => {
  return {
    type: CLICK_NEXT_BUTTON,
    days
  };
};

export const changeWeeklyView = () => {
  return {
    type: CHANGE_WEEKLY_VIEW,
  };
};

export const getEventsData = (data) => {
  return {
    type: GET_EVENTS_DATA,
    data
  };
};
