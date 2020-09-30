import { ADD_EVENT, REMOVE_EVENT, LOGIN } from 'constants/actionTypes';


export const addEvent = event => {
  return {
    type: ADD_EVENT,
    title: event.title,
    description: event.description,
    date: event.date
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
