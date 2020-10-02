import {
  LOGIN,
  GET_EVENTS,
  SET_DAY,
  SET_MONTH,
  SET_YEAR,
  SET_CALENDAR_TYPE
} from 'constants/actionTypes';

export const loggin = (user, isLogin) => {
  return {
    type: LOGIN,
    user: user,
    isLogin: isLogin
  }
};

export const getEvents = events => {
  return {
    type: GET_EVENTS,
    events
  }
};

export const setDay = count => {
  return {
    type: SET_DAY,
    day: count
  }
};

export const setMonth = count => {
  return {
    type: SET_MONTH,
    month: count
  }
};

export const setYear = count => {
  return {
    type: SET_YEAR,
    year: count
  }
};

export const setCalendarType = calendarType => {
  return {
    type: SET_CALENDAR_TYPE,
    calendarType: calendarType
  }
};
