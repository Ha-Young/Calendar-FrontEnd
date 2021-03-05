import {
  ADD_NEW_EVENT,
  UPDATE_USER_EVENT,
  GET_USER_EVENTS,
  DELETE_USER_EVENT,
} from "../actions/actionTypes";

const initialState = [];

export default function EventInfoControlReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_EVENT:
      return [...state, action.userInputInfo];

    case GET_USER_EVENTS:
      return [...state, ...action.fetchedUserEvents];

    case UPDATE_USER_EVENT:
      return action.updatedUserEventInfo;

    case DELETE_USER_EVENT:
      return state.filter(event => event.id !== action.targetEventId);

    default: return state;
  }
}
