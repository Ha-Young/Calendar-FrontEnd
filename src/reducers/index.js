/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

import { MOVE_NEXT_DAY, MOVE_PREV_DAY, RESET_DAY } from "../constants/actionTypes";


const initialState = {
  count: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_NEXT_DAY:
      return {
        ...state,
        count: state.count + 1
      };
    case MOVE_PREV_DAY:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET_DAY:
      return {
        ...state,
        count: initialState.count
      };
    default:
      return state;
  }
};
