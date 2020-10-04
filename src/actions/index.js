import * as types from '../constants/actionTypes';
import { schedule } from '../utils/api'

export const createSchedule = async newSchedule => {
  await schedule.setSchedule(newSchedule);
};

export const receiveSchedules = (schedules) => ({
  type: types.RECEIVE_SCHEDULE,
  schedules
});

export const setTimespanAction = (timespan) => {
  return {
    type: types.UPDATE_TIMESPAN,
    timespan
  };
};

export const incrementDateAction = () => {
  return {
    type: types.INCREMENT_DATE
  };
};

export const decrementDateAction = () => {
  return {
    type: types.DECREMENT_DATE
  };
};

export const incrementWeekAction = () => {
  return {
    type: types.INCREMENT_WEEK
  };
};

export const decrementWeekAction = () => {
  return {
    type: types.DECREMENT_WEEK
  };
};
