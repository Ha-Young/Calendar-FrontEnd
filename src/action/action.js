import {
  LOGIN,
  GET_EVENTS,
  REMOVE_EVENT,
  SET_DAY,
  SET_DAYS,
  SET_MONTH,
  SET_YEAR
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

export const removeEvent = id => {
  return {
    type: REMOVE_EVENT,
    id,
  }
};

export const setDay = count => {
  return {
    type: SET_DAY,
    day: count
  }
};

export const setDays = counts => {
  return {
    type: SET_DAYS,
    days: counts
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
