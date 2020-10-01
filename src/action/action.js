import { GET_EVENTS, REMOVE_EVENT, LOGIN } from 'constants/actionTypes';


export const getEvents = events => {
  return {
    type: GET_EVENTS,
    events: events
  }
};

export const removeEvent = id => {
  return {
    type: REMOVE_EVENT,
    id,
  }
};

export const loggin = (user, isLogin) => {
  return {
    type: LOGIN,
    user: user,
    isLogin: isLogin
  }
};

