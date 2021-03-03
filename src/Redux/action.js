import { ADD_SUBMIT_DATA } from '../Redux/actionTypes';

export const addsubmitdata = (
  id,
  title,
  description,
  startdate,
  enddate
) => (
  {
    type: ADD_SUBMIT_DATA,
    id,
    title,
    description,
    startdate,
    enddate
  });
