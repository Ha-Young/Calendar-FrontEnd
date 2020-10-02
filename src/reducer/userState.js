import * as types from '../constants';

function user(state = {}, action) {
  if (action.type === types.SET_USER) {
    console.log(action.payload);
    return action.payload;
  }

  return state;
}

function isLogin(state = false, action) {
  if (action.type === types.SET_USER && action.payload) {
    return !state;
  }

  return state;
}

export default {
  user,
  isLogin,
};
