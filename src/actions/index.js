/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js
  const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
  })
 */

import * as types from '../constants/actionTypes';

export const changeViewOption = ({ viewOption, currentDate }) => ({
  type: types.CHANGE_VIEW_OPTION,
  payload: { viewOption, currentDate },
});

export const changeCurrentDate = ({ viewOption, currentDate }) => ({
  type: types.CHANGE_DATE,
  payload: { viewOption, currentDate },
});
