import { DETAIL_CHANGED, FETCH_DATA } from '../constants/ActionType';

export const changeMode = mode => ({ type: mode });
export const setDetails = (detailsState, dayIndex, timeIndex) => {
  return {
    type: detailsState,
    focusedItemIndex: {
      dayIndex: dayIndex,
      timeIndex: timeIndex,
    },
  };
};
export const setPager = (direction, mode) => {
  return {
    type: direction,
    mode: mode,
  };
};
export const changeDetails = () => {
  return {
    type: DETAIL_CHANGED,
  };
};
export const setData = data => {
  return {
    type: FETCH_DATA,
    dateState: data.dateState,
    detailsList: data.detailsList,
  };
};