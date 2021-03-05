import * as types from '../constants/actionTypes';

export const changeViewOption = ({ viewOption, currentDate }) => ({
  type: types.CHANGE_VIEW_OPTION,
  payload: { viewOption, currentDate },
});

export const changeCurrentDate = ({ viewOption, currentDate }) => ({
  type: types.CHANGE_DATE,
  payload: { viewOption, currentDate },
});
