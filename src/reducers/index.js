/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { SET_CURRENT_DATE, SET_CURRENT_WEEK, CHANGE_CALENDAR_MODE, FORWARD_ONE_DAY, BACKWARD_ONE_DAY, FORWARD_ONE_WEEK, BACKWARD_ONE_WEEK } from '../constants/actionTypes';
import { DAYS, WEEKS } from '../constants/dateFormats';
import { getThisWeekSunAndSat, moveDays } from '../utils/dateUtil';

const initialState = {
  currentDate: '',
  currentWeek: '',
  calendarMode: ''
};

const FORWARD_ONE = 1;
const BACKWARD_ONE = -1;

export default function reducer(state = initialState, action) {
  let movedDay;
  switch (action.type) {
    case SET_CURRENT_DATE: 
      return {
        ...state,
        currentDate: action.currentDate
      }
    case SET_CURRENT_WEEK:
      return {
        ...state,
        currentWeek: action.currentWeek
      }
    case CHANGE_CALENDAR_MODE:
      return {
        ...state,
        calendarMode: action.calendarMode
      }
    case FORWARD_ONE_DAY:
      movedDay = moveDays(action.currentDate, FORWARD_ONE, DAYS);
      return {
        ...state,
        currentDate: movedDay,
        currentWeek: getThisWeekSunAndSat(movedDay)
      }
    case BACKWARD_ONE_DAY:
      movedDay = moveDays(action.currentDate, BACKWARD_ONE, DAYS);
      return {
        ...state,
        currentDate: movedDay,
        currentWeek: getThisWeekSunAndSat(movedDay)
      }
    case FORWARD_ONE_WEEK:
      movedDay = moveDays(action.currentDate, FORWARD_ONE, WEEKS);
      return {
        ...state,
        currentDate: movedDay,
        currentWeek: getThisWeekSunAndSat(movedDay)
      }
    case BACKWARD_ONE_WEEK:
      movedDay = moveDays(action.currentDate, BACKWARD_ONE, WEEKS);
      return {
        ...state,
        currentDate: movedDay,
        currentWeek: getThisWeekSunAndSat(movedDay)
      }
    default:
      return state;
  }
}
