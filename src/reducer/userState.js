import { SET_USER } from '../constants';

function user(state = {}, action) {
  if (action.type === SET_USER) {
    return action.payload;
  }

  return state;
}

function isLogin(state = false, action) {
  if (action.type === SET_USER && action.payload) {
    return !state;
  }

  return state;
}

export default {
  user,
  isLogin,
};
