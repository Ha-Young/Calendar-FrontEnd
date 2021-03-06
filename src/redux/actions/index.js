import { ADD_TO_EVENTS, INIT_NOTIFICATION, LOGIN, LOGOUT, NEW_NOTIFICATION, REMOVE_ALL_EVENTS, REMOVE_EVENTS } from "../../constants/actionTypes";

export const addEvents = (date, event) => ({
  type: ADD_TO_EVENTS, payload: { date, event },
});

export const removeEvents = (date, time) => ({
  type: REMOVE_EVENTS, payload: { date, time},
});

export const logout = () => ({
  type: LOGOUT,
});

export const login = (userId) => ({
  type: LOGIN, payload: { userId }
});

export const removeAllEvents = (date, time) => ({
  type: REMOVE_ALL_EVENTS, payload: { date, time},
});

export const newNotification = (message) => ({
  type: NEW_NOTIFICATION, payload: { message },
});

export const offNotification = () => ({
  type: INIT_NOTIFICATION, 
});
