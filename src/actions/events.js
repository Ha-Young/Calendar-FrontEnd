import * as types from "../constants/actionTypes";

export const createEvent = event => {
  return {
    type: types.CREATE_EVNETS,
    payload: event,
  };
};
