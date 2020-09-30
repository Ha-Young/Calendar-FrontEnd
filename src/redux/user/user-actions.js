import * as types from './user-actionTypes';

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: user,
});
