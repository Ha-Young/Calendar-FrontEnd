import { ADD_EVENT } from "../constants/actionTypes";
import { UPDATE_EVENT } from "../constants/actionTypes";
import { DELETE_EVENT } from "../constants/actionTypes";

export const events = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      return state.concat(action.event);
    case UPDATE_EVENT:
      return state.map((event) => {
        if (event.eventId === action.event.eventId) return action.event;
      });
    case DELETE_EVENT:
      return state.map((event) => {
        if (event.eventId === action.eventId) return null;
        return event;
      });
    default:
      return state;
  }
};
