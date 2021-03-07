/*

  Action Creators

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/actions/index.js

 */
import { SET_CURRENT_DATE, SET_CURRENT_WEEK, CHANGE_CALENDAR_MODE, FORWARD_ONE_DAY, BACKWARD_ONE_DAY, FORWARD_ONE_WEEK, BACKWARD_ONE_WEEK, SET_SCHEDULE_DATA, SET_TARGET_SCHEDULE_DATA } from '../constants/actionTypes';

export const setCurrentDate = (currentDate) => ({
  type: SET_CURRENT_DATE,
  currentDate
});

export const setCurrentWeek = (currentWeek) => ({
  type: SET_CURRENT_WEEK,
  currentWeek
});

export const changeCalendarMode = (calendarMode) => ({
  type: CHANGE_CALENDAR_MODE,
  calendarMode
});

export const moveOneDay = (isForWard, currentDate) => ({
  type: isForWard ? FORWARD_ONE_DAY : BACKWARD_ONE_DAY,
  currentDate
});

export const moveOneWeek = (isForWard, currentDate) => ({
  type: isForWard ? FORWARD_ONE_WEEK : BACKWARD_ONE_WEEK,
  currentDate
});

export const setScheduleData = (scheduleData) => ({
  type: SET_SCHEDULE_DATA,
  scheduleData
});

export const setTargetScheduleData = (targetScheduleData) => ({
  type: SET_TARGET_SCHEDULE_DATA,
  targetScheduleData
});
