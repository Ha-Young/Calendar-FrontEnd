import {
  ADD_EVENT,
  USER_LOGIN,
  USER_LOGOUT,
  CLICK_PREV_BUTTON,
  CLICK_NEXT_BUTTON,
  CHANGE_WEEKLY_VIEW,
} from "./constants";

export const addEvent = (inputs) => {
  return {
    type: ADD_EVENT,
    inputs
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

export const clickPrevButton = (date) => {
  return {
    type: CLICK_PREV_BUTTON,
    date
  };
};

export const clickNextButton = (date) => {
  return {
    type: CLICK_NEXT_BUTTON,
    date
  };
};

export const changeWeeklyView = () => {
  return {
    type: CHANGE_WEEKLY_VIEW,
  };
};
