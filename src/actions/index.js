import firebase from '../utils/firebase';
import * as types from '../constants/actionTypes';
import { schedule } from '../utils/api'

// 해당 action은 api에서 파이어베이스와 통신하는 로직을 콜한다
export const createSchedule = async newSchedule => {
  await schedule.setSchedule(newSchedule);
};

export const receiveSchedules = (schedules) => {
  return {
    type: types.RECEIVE_SCHEDULE,
    schedules
  }
};
