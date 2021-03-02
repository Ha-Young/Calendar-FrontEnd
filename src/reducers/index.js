/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

const initialState = {
  currentDate: '',
  currentWeek: '',
  calendarMode: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ('SET_CURRENT_DATE'): 
      return {
        ...state,
        currentDate: action.currentDate
      }
    case ('SET_CURRENT_WEEK'):
      return {
        ...state,
        currentWeek: action.currentWeek
      }
    case ('CHANGE_CALENDAR_MODE'):
      return {
        ...state,
        calendarMode: action.calendarMode
      }
    default:
      return state;
  }
}
