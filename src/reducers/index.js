/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

import { DAY, NEXT_DATE, PREV_DATE, WEEK, SELECT_TIME, SELECT_DATE, ADD_EVENT, EDIT_EVENT, REMOVE_EVENT, GET_DB_EVENT } from "../constants/actionTypes";
import { getCurrentWeek, getISOString, getLastWeek, getNextWeek, getTomorrow, getYesterday } from "../utils/getDate";
import _ from "lodash";
import { saveData } from "../api";

const initialState = {
  period: DAY,
  today: getISOString(),
  currentDay: getISOString(),
  currentWeek: getCurrentWeek(new Date()),
  events: {},
};

export default function reducer(state = initialState, action) {
  const copy = _.cloneDeep(state);

  switch (action.type) {
    case DAY:
      copy.period = DAY;
      return copy;
    case WEEK:
      copy.period = action.unit;
      return copy;

    case PREV_DATE:
      if (copy.period === DAY) {
        copy.currentDay = getYesterday(copy.currentDay);
      } else {
        copy.currentDay = getLastWeek(copy.currentDay);
      }
      return copy;
    case NEXT_DATE:
      if (copy.period === DAY) {
        copy.currentDay = getTomorrow(copy.currentDay);
      } else {
        copy.currentDay = getNextWeek(copy.currentDay);
      }
      return copy;

    case SELECT_DATE:
      copy.currentDay = getISOString(action.date);
      return copy;
    case SELECT_TIME:
      copy.selectedTime = action.time;
      return copy;

    case ADD_EVENT: {
      const {
        date,
        title,
        description,
        from,
        to,
        id,
      } = action.event;

      if (!copy.events[date]) {
        copy.events[date] = {};
      }

      copy.events[date][id] = {
        date,
        title,
        description,
        from,
        to,
        id,
        length: to - from,
      };

      saveData(copy.events);

      return copy;
    }
    case EDIT_EVENT:{
      const { date, id, from, to } = action.event;

      action.event.length = to - from;
      copy.events[date][id] = action.event;

      saveData(copy.events);

      return copy;
    }
    case REMOVE_EVENT: {
      const {
        date,
        id,
      } = action.event;

      delete copy.events[date][id];

      saveData(copy.events);

      return copy;
    }

    case GET_DB_EVENT:
      copy.events = action.data;

      return copy;

    default:
      return state;
  }
}
