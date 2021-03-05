import * as types from "../constants/actionTypes";

export const createdEvent = event => {
  return {
    type: types.CREATED_EVNETS,
    payload: event,
  };
};

export const updatedEvent = event => {
  return {
    type: types.UPDATED_EVENTS,
    payload: event,
  };
};

export const deletedEvent = ({ eventId, date }) => {
  return {
    type: types.DELETED_EVENTS,
    payload: { eventId, date },
  };
};
