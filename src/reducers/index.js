/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

import * as actionTypes from "../constants/actionTypes";
import { getCurrentWeek, getISOString, getLastWeek, getNextWeek, getTomorrow, getYesterday } from "../utils/getDate";
import { saveEventList } from "../api";
import _ from "lodash";

const initialState = {
  period: actionTypes.DAY,
  today: getISOString(),
  currentDay: getISOString(),
  currentWeek: getCurrentWeek(new Date()),
  events: {},
};

export default (state = initialState, action) => {
  const copiedState = _.cloneDeep(state);

  switch (action.type) {
    case actionTypes.DAY:
      copiedState.period = actionTypes.DAY;
      return copiedState;
    case actionTypes.WEEK:
      copiedState.period = action.unit;
      return copiedState;

    case actionTypes.GET_PREV_DATE:
      if (copiedState.period === actionTypes.DAY) {
        copiedState.currentDay = getYesterday(copiedState.currentDay);
      } else {
        copiedState.currentDay = getLastWeek(copiedState.currentDay);
      }
      return copiedState;
    case actionTypes.GET_NEXT_DATE:
      if (copiedState.period === actionTypes.DAY) {
        copiedState.currentDay = getTomorrow(copiedState.currentDay);
      } else {
        copiedState.currentDay = getNextWeek(copiedState.currentDay);
      }
      return copiedState;

    case actionTypes.SELECT_DATE:
      copiedState.currentDay = getISOString(action.date);
      return copiedState;
    case actionTypes.SELECT_TIME:
      copiedState.selectedTime = action.time;
      return copiedState;

    case actionTypes.ADD_EVENT: {
      const {
        date,
        from,
        to,
        id,
      } = action.event;

      if (!copiedState.events[date]) {
        copiedState.events[date] = {};
      }

      copiedState.events[date][id] = {
        ...action.event,
        length: to - from,
      };

      saveEventList(copiedState.events);

      return copiedState;
    }
    case actionTypes.EDIT_EVENT:{
      const { date, id, from, to } = action.event;

      action.event.length = to - from;
      copiedState.events[date][id] = action.event;

      saveEventList(copiedState.events);

      return copiedState;
    }
    case actionTypes.REMOVE_EVENT: {
      const {
        date,
        id,
      } = action.event;

      delete copiedState.events[date][id];

      saveEventList(copiedState.events);

      return copiedState;
    }

    case actionTypes.GET_EVENT_LIST:
      copiedState.events = action.data;

      return copiedState;

    default:
      return state;
  }
};
