import { ADD_EVENT, REMOVE_EVENT, LOGIN, GET_DATA} from 'constants/actionTypes';


export const addEvent = event => {
  return {
    type: ADD_EVENT,
    title: event.title,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate
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

export const getData = events => {
  return {
    type: GET_DATA,
  };
};