import {
  GET_STORED_EVENTS_DATA,
  ADD_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  USER_LOGIN,
  USER_LOGOUT,
  CLICK_PREV_DATE_BUTTON,
  CLICK_NEXT_DATE_BUTTON,
  CHANGE_VIEW_TYPE,
  SHOW_ERROR_MESSAGE,
} from "./constants";

export const getStoredEventsData = (data) => {
  return {
    type: GET_STORED_EVENTS_DATA,
    data,
  };
};

export const addEvent = (eventDetails) => {
  return {
    type: ADD_EVENT,
    eventDetails,
  };
};

export const updateEvent = (eventDetails) => {
  return {
    type: UPDATE_EVENT,
    eventDetails,
  };
};

export const deleteEvent = (eventDetails) => {
  return {
    type: DELETE_EVENT,
    eventDetails,
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

export const clickPrevDateButton = (days) => {
  return {
    type: CLICK_PREV_DATE_BUTTON,
    days,
  };
};

export const clickNextDateButton = (days) => {
  return {
    type: CLICK_NEXT_DATE_BUTTON,
    days,
  };
};

export const changeViewType = (viewType) => {
  return {
    type: CHANGE_VIEW_TYPE,
    viewType,
  };
};

export const showErrorMessage = (error) => {
  return {
    type: SHOW_ERROR_MESSAGE,
    error,
  };
};
