import moment from "moment";
import { CALENDAR_MODE } from "../utils/constants";
import {
    CHANGE_CALENDAR_MODE,
    MOVE_TO_PREV_DATE,
    MOVE_TO_NEXT_DATE,
    ADD_NEW_EVENT,
} from "../actions/actionTypes";

const initialState = [];

export default function EventInfoControlReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_EVENT:
      return [...state, action.userInputInfo]

    default: return state;

  }
}

