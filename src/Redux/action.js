import { ADD_SUBMIT_DATA } from '../Redux/actionTypes';

export const addsubmitdata = (scheduleInfo) => (
  {
    type: ADD_SUBMIT_DATA,
    schedule: {...scheduleInfo}
  });
