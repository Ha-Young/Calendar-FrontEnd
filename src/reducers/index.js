/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

  const visibleIds = (state = [], action) => {
    switch (action.type) {
      case RECEIVE_PRODUCTS:
        console.log(visibleIds);
        return action.products.map((product) => product.id);
      default:
        return state;
    }
  };
 */

import { CHANGE_VIEW_OPTION } from "../constants/actionTypes";
import { VIEW_OPTION } from "../constants/stateTypes";

const initialState = {
  viewOption: VIEW_OPTION.DAILY,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VIEW_OPTION:
      state.viewOption = action.payload;
      return state;

    default:
      return state;
  }
}
