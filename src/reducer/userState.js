import { SET_USER } from '../constants';

function user(state = { uid: process.env.REACT_APP_uid }, action) {
  if (action.type === SET_USER) {
    return action.userData;
  }

  return state;
}

function isLogin(state = true, action) {
  if (action.type === SET_USER) {
    if (action.userData) {
      return !state;
    }
  }

  return state;
}

export default {
  user,
  isLogin,
};
