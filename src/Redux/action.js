import {
  ADD_TITLE,
  ADD_DESCRIPTION,
  ADD_STARTDATE,
  ADD_ENDDATE
} from '../Redux/actionTypes';

export const addtitle = (id, title) => ({
  type: ADD_TITLE,
  id: 'title' + id,
  title
});

export const adddescription = (id, description) => ({
  type: ADD_DESCRIPTION,
  id: 'description' + id,
  description
});

export const addstartdate = (id, startdate) => ({
  type: ADD_STARTDATE,
  id: 'startdate' + id,
  startdate
});

export const addenddate = (id, enddate) => ({
  type: ADD_ENDDATE,
  id: 'enddate' + id,
  enddate
});
