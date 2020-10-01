import * as types from './calendar.actionTypes';

export const setCurrentViewMode = viewMode => ({
  type: types.SET_CURRENT_VIEW_MODE,
  payload: viewMode,
});

export const setDate = date => ({
  type: types.SET_DATE,
  payload: date,
});

export const moveToNextPage = date => ({
  type: types.MOVE_TO_NEXT_PAGE,
  payload: date,
});

export const moveToPrevPage = date => ({
  type: types.MOVE_TO_PREV_PAGE,
  payload: date,
});
