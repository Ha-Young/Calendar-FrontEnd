import * as types from './calendar.actionTypes';

export const setCurrentViewMode = viewMode => ({
  type: types.SET_CURRENT_VIEW_MODE,
  payload: viewMode,
});

export const setBaseDate = baseDate => ({
  type: types.SET_BASE_DATE,
  payload: baseDate,
});

export const setEventLists = eventLists => ({
  type: types.SET_EVENT_LISTS,
  payload: eventLists,
});

export const moveToNextPage = () => ({
  type: types.MOVE_TO_NEXT_PAGE,
});

export const moveToPrevPage = () => ({
  type: types.MOVE_TO_PREV_PAGE,
});
