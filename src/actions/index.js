/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js
  const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
  })
 */

import * as types from '../constants/actionTypes';

export const changeViewOption = viewOption => ({
  type: types.CHANGE_VIEW_OPTION,
  payload: viewOption,
});
