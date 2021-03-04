import { ACTION } from "constants/actionTypes";
import { getDateISO, getMonthAndWeek } from "utils/utilFunction";

const initialState = {
  userId: "",
  userProfile: {},
  currentDateISO: getDateISO(0),
  currentMonthAndWeek: getMonthAndWeek(getDateISO(0)),
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

    case ACTION.SHOW_DAILY:
      return {
        ...state,
        dailyEvent: action.dailyEvent,
        currentDate: action.date,
        currentMonthAndWeek: action.currentMonthAndWeek,
      };

    case ACTION.SHOW_WEEKLY:
      return {
        ...state,
        weeklyEvent: action.weeklyEvent,
        currentMonthAndWeek: { ...action.currentMonthAndWeek },
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
          [action.id]: { ...action.editedEvent, id: action.id },
        },
      };

    case ACTION.NO_EVENT:
      return state;

    default:
      return state;
  }
}
