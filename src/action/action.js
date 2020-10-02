import {
  LOGIN,
  GET_EVENTS,
  SET_DAY,
  SET_WEEK,
  SET_MONTH,
  SET_YEAR,
  SET_CALENDAR_TYPE
} from 'constants/actionTypes';

export const loggin = (user, isLogin) => {
  return {
    type: LOGIN,
    user: user,
    isLogin: isLogin
  };
};

export const getEvents = events => {
  return {
    type: GET_EVENTS,
    events
  };
};

export const setDay = oneDay => {
  return {
    type: SET_DAY,
    day: oneDay
  };
};

export const setWeek = week => {
  return {
    type: SET_WEEK,
    week: week
  };
};

export const setMonth = oneMonth => {
  return {
    type: SET_MONTH,
    month: oneMonth
  };
};

export const setYear = oneYear => {
  return {
    type: SET_YEAR,
    year: oneYear
  };
};

export const setCalendarType = calendarType => {
  return {
    type: SET_CALENDAR_TYPE,
    calendarType: calendarType
  };
};
