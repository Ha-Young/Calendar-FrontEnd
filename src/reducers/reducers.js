import { ACTION } from "constants/actionTypes";
import { getDateISO } from "utils/utilFunction";

const initialState = {
  userId: "",
  userProfile: {},
  currentDateISO: getDateISO(0),
  weeklyEvent: {},
  dailyEvent: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION.SET_INITIALIZE:
      return {
        ...state,
        userId: action.userId,
        dailyEvent: action.dailyEvent,
        weeklyEvent: action.weeklyEvent,
      };

    case ACTION.SHOW_PREVIOUS_DAY:
      return {
        ...state,
        currentDateISO: action.currentDateISO,
      };

    case ACTION.SHOW_NEXT_DAY:
      return {
        ...state,
        currentDateISO: action.currentDateISO,
      };

    case ACTION.SHOW_WEEKLY:
      return {
        ...state,
        weeklyEvent: action.weeklyEvent,
      };

    case ACTION.SHOW_PREVIOUS_WEEK:
      return {
        ...state,
        // currentWeekDays: action.currentWeekDays,
      };

    case ACTION.SHOW_NEXT_WEEK:
      return {
        ...state,
        // currentWeekDays: action.currentWeekDays,
      };

    case ACTION.ADD_EVENT:
      return {
        ...state,
        weeklyEvent: {
          ...state.weeklyEvent,
          [action.id]: { ...action.newEvent, id: action.id },
        },
      };

    case ACTION.DELETE_EVENT:
      delete state.weeklyEvent[action.id];
      return state;

    case ACTION.EDIT_EVENT:
      return {
        ...state,
        weeklyEvent: {
          ...state.weeklyEvent,
          [action.id]: { ...action.editedEvent },
        },
      };

    case ACTION.NO_EVENT:
      return state;

    default:
      return state;
  }
}
