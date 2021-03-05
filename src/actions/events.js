import * as types from "../constants/actionTypes";

export const createEvent = event => {
  return {
    type: types.CREATE_EVNETS,
    payload: event,
  };
};

export const updateEvent = event => {
  return {
    type: types.UPDATE_EVENTS,
    payload: event,
  };
};

export const deleteEvent = eventId => {
  return {
    type: types.DELETE_EVENTS,
    payload: eventId,
  };
};
