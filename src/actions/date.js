import * as types from "../constants/actionTypes";

export const receiveDate = date => {
  return {
    type: types.RECEIVE_DATE,
    payload: date,
  };
};

export const receiveDateList = dateList => {
  return {
    type: types.RECEIVE_DATE_LIST,
    payload: dateList,
  };
};
