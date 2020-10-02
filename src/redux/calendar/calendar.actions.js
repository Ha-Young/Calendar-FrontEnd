import * as types from './calendar.actionTypes';

export const setCurrentViewMode = viewMode => ({
  type: types.SET_CURRENT_VIEW_MODE,
  payload: viewMode,
});

export const setBaseDate = baseDate => ({
  type: types.SET_BASE_DATE,
  payload: baseDate,
});

export const setDatesShown = baseDate => ({
  type: types.SET_DATES_SHOWN,
  payload: baseDate,
});

export const setEventLists = uid => ({
  type: types.SET_EVENT_LISTS,
  payload: uid,
});

export const moveToNextPage = baseDate => ({
  type: types.MOVE_TO_NEXT_PAGE,
  payload: baseDate,
});

export const moveToPrevPage = baseDate => ({
  type: types.MOVE_TO_PREV_PAGE,
  payload: baseDate,
});
