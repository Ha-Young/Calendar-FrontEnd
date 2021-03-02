/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

const initialState = {
  events: {},
  record: {},

};

export default function reducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case "CHANGE_VALUE":
      let tmp = action.changeTarget;
      newState.record[action.changeTarget] = action.value;
      break;
    case "SAVE_RECORD":
      newState.events = newState.record;
      break;
  }

  return newState;
}
