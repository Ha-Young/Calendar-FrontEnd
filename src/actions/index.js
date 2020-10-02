import * as types from "../constants/actionTypes";

export const changeDateUnit = (dateUnit) => ({
  type: types.CHANGE_DATE_UNIT,
  dateUnit,
});

export const increaseDate = (degree) => ({
  type: types.INCREASE_DATE,
  degree,
});

export const decreaseDate = (degree) => ({
  type: types.DECREASE_DATE,
  degree,
});

export const updateEvent = (event) => ({
  type: types.UPDATE_EVENT,
  event,
});
