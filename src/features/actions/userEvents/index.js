import { UPDATE_USER_EVENT, DELETE_USER_EVENT } from "../../../constants/actionTypes";

export const updateUserEvent = (event) => ({ type: UPDATE_USER_EVENT, payload: event });

export const deleteUserEvent = (eventId) => ({ type: DELETE_USER_EVENT, payload: eventId });
