import * as types from '../constants/actionTypes';
import { schedule } from '../utils/api'

export const createSchedule = async newSchedule => {
  await schedule.setSchedule(newSchedule);
};

export const receiveSchedules = (schedules) => {
  return {
    type: types.RECEIVE_SCHEDULE,
    schedules
  };
};

export const setTimespanAction = (timespan) => {
  return {
    type: types.UPDATE_TIMESPAN,
    timespan
  };
};

export const incrementDateAction = (date) => {
  return {
    type: types.INCREMENT_DATE,
    date
  };
};

export const decrementDateAction = (date) => {
  return {
    type: types.DECREMENT_DATE,
    date
  };
};

export const incrementWeekAction = (week) => {
  return {
    type: types.INCREMENT_WEEK,
    week
  };
};

export const decrementWeekAction = (week) => {
  return {
    type: types.DECREMENT_WEEK,
    week
  };
};
