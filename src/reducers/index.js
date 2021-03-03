import { ACTION } from "constants/actionTypes";
import { getWeek, getToday } from "utils/utilFunction";

const initialState = {
  userState: false,
  events: [],
  currentPeriod: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_INITIALIZE:
      return {
        ...state,
        events: [...action.eventList],
        userState: action.userState,
      };

    case ACTION.ADD_EVENT:
      return {
        ...state,
        events: [...state.events, { ...action.newEvent, id: action.id }],
      };

    case ACTION.DELETE_EVENT:
      return;

    case ACTION.EDIT_EVENT:
      return { ...state, title: action.title };

    case ACTION.NO_EVENT:
      return;

    default:
      return state;
  }
}
