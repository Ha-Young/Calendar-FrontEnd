export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const ADD_EVENT = 'ADD_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';

export const receiveEventList = (event) => {
  return { type: RECEIVE_EVENTS, payload: { event } };
};

export const addToEventList = (event) => {
  return { type: ADD_EVENT, payload: { event } };
};

export const updateToEventList = (event) => {
  return { type: UPDATE_EVENT, payload: { event } };
};

export const deleteTargetEvent = (id) => {
  return { type: DELETE_EVENT, payload: { id } };
};

export const LOAD_ENDED = 'LOAD_ENDED';
export const CHANGE_CALENDAR_VIEW_MODE = 'CHANGE_CALENDAR_VIEW_MODE';
export const CHANGE_TARGET_DATE = 'CHANGE_TARGET_DATE';

export const setLoadedState = () => {
  return { type: LOAD_ENDED, payload: { loadState: false } };
};

export const swapCalendarViewMode = (value) => {
  return { type: CHANGE_CALENDAR_VIEW_MODE, payload: { viewMode: value } };
};

export const changeTargetDate = (date, isADay) => {
  return { type: CHANGE_TARGET_DATE, payload: { isADay, date } };
};
