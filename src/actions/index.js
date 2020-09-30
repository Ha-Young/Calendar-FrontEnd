import moment from 'moment';
import * as types from '../constants';

export function setUser(userData) {
  return {
    type: types.SET_USER,
    userData,
  };
}

export function toggleWeeklyAndDaily() {
  return {
    type: types.TOGGLE_WEEKLY_AND_DAILY,
  };
}

export function moveNextDay(count) {
  return {
    type: types.MOVE_NEXT_DAY,
    count,
  };
}

export function movePrevDay(count) {
  return {
    type: types.MOVE_PREV_DAY,
    count,
  };
}

export function createEvent(info, uid, dataId) {
  return {
    type: types.CREATE_EVENT,
    data: {
      ...info,
      createdAt: moment().format(),
      creator: uid,
      id: dataId,
    },
  };
}

export function setInitData(data) {
  return {
    type: types.SET_INIT_DATA,
    data,
  };
}
