export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const ADD_EVENT = 'ADD_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

export const receiveEventList = (event) => {
  return { type: RECEIVE_EVENTS, events: event };
};

export const addToEventList = (event) => {
  return { type: ADD_EVENT, events: event };
};

export const updateToEventList = (event) => {
  return { type: UPDATE_EVENT, events: event };
};

export const deleteTargetEvent = (id) => {
  return { type: DELETE_EVENT, events: id };
};

export const LOAD_ENDED = 'LOAD_ENDED';
export const CHANGE_CALENDAR_VIEW_MODE = 'CHANGE_CALENDAR_VIEW_MODE';
export const CHANGE_TARGET_DATE = 'CHANGE_TARGET_DATE';

export const setLoadedState = () => {
  return { type: LOAD_ENDED, payload: false };
};

export const swapCalendarViewMode = (value) => {
  return { type: CHANGE_CALENDAR_VIEW_MODE, payload: value };
};

export const changeTargetDate = (date, isADay) => {
  return { type: CHANGE_TARGET_DATE, payload: { isADay, date } };
};
