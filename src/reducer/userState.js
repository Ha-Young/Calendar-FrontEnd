import { SET_USER } from '../constants';
import { createReducer } from '@reduxjs/toolkit';

const user = createReducer({}, {
  [SET_USER]: (_, action) => action.payload,
});

const isLogin = createReducer(false, {
  [SET_USER]: (state, action) => {
    return action.payload ? !state : state;
  },
});

export default {
  user,
  isLogin,
};
