/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      const { eventInfo } = action;
      const { date } = eventInfo;
      if (state.hasOwnProperty(eventInfo.date)) {
        return {...state,
          date,
          [date]: [...state[date], eventInfo]
        };
      }
      return {...state, date: date, [date]: [eventInfo]};
    default:
      return state;
  }
}

export default reducer;
