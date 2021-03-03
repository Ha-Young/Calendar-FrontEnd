/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

import { RECEIVE_EVENTS } from "../actions/index";

const initialState = { welcome: "hi" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_EVENTS:
      return {
        ...state,
        events: action.events,
      };
    default:
      return state; // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환합니다.
  }
}
