/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { combineReducers } from 'redux';
import { CHANGE_CALENDAR_MODE,  SET_SCHEDULE_DATA, SET_TARGET_SCHEDULE_DATA } from '../constants/actionTypes';
import dateReducer from './date';

const initialState = {
  calendarMode: '',
  scheduleData: [],
  targetScheduleData: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CALENDAR_MODE:
      return {
        ...state,
        calendarMode: action.calendarMode
      };
    case SET_SCHEDULE_DATA: 
      return {
        ...state,
        scheduleData: action.scheduleData
      };
    case SET_TARGET_SCHEDULE_DATA:
      return {
        ...state,
        targetScheduleData: action.targetScheduleData
      };
    default:
      return state;
  }
}

export default combineReducers({
  rootStates: reducer,
  dateStates: dateReducer
});
