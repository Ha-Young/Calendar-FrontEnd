import { ACTION } from "constants/actionTypes";
import { getDaysOfWeek, getDateByRef } from "utils/utilFunction";

const initialState = {
  userState: false,
  currentWeek: getDaysOfWeek(0),
  weeklyEvent: [],
  currentDate: getDateByRef(0),
  dailyEvent: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_INITIALIZE:
      return {
        ...state,
        events: [...action.eventList],
        userState: action.userState,
      };

    case ACTION.SHOW_PREVIOUS_DAY:
      return {
        ...state,
        currentDate: action.currentDate,
      };

    case ACTION.SHOW_NEXT_DAY:
      return {
        ...state,
        currentDate: action.currentDate,
      };

    case ACTION.SHOW_PREVIOUS_WEEK:
      return state;

    case ACTION.SHOW_NEXT_WEEK:
      return state;

    case ACTION.ADD_EVENT:
      return {
        ...state,
        events: [...state.events, { ...action.newEvent, id: action.id }],
      };

    case ACTION.DELETE_EVENT:
      return state;

    case ACTION.EDIT_EVENT:
      return { ...state, title: action.title };

    case ACTION.NO_EVENT:
      return state;

    default:
      return state;
  }
}
