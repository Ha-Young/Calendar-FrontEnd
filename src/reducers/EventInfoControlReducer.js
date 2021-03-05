import moment from "moment";
import { CALENDAR_MODE } from "../utils/constants";
import {
  ADD_NEW_EVENT,
  GET_USER_EVENTS,
} from "../actions/actionTypes";

const initialState = [];

export default function EventInfoControlReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_EVENT:
      return [...state, action.userInputInfo];

    case GET_USER_EVENTS:
      return [...state, ...action.fetchedUserEvents];

    default: return state;

  }
}

