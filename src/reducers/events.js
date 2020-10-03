import { UPDATE_EVENT } from "../constants/actionTypes";

const initialState = { byId: {}, allIds: [] };

export const events = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EVENT:
      const newState = { byId: {}, allIds: [] };

      for (let i = 0; i < action.event.length; i++) {
        const currentEvent = action.event[i];
        newState.byId[currentEvent.eventId] = currentEvent;
        newState.allIds.push(currentEvent.eventId);
      }

      return newState;
    default:
      return state;
  }
};
