import { ADD_SUBMIT_DATA, SHOW_SCHEDULE_INFO } from '../Redux/actionTypes';

export const addsubmitdata = (scheduleInfo) => (
  {
    type: ADD_SUBMIT_DATA,
    schedule: {...scheduleInfo}
  });

export const showscheduleinfo = () => (
  {
    type: SHOW_SCHEDULE_INFO,
    isScheduleShown: false
  });
