import { ADD_SUBMIT_DATA, SHOW_SCHEDULE_INFO, SET_INITIAL_DATA } from '../Redux/actionTypes';

export const addsubmitdata = (scheduleInfo) => (
  {
    type: ADD_SUBMIT_DATA,
    schedule: {...scheduleInfo}
  });

export const showscheduleinfo = () => (
  {
    type: SHOW_SCHEDULE_INFO
  });

export const setinitialdata = (initialData) => (
  {
    type: SET_INITIAL_DATA,
    initialData
  }
)
