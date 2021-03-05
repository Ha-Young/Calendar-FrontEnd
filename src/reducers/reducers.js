import { ACTION } from "constants/actionTypes";

const initialState = {
  userId: "",
  userData: {},
  weeklyEvent: {},
  dailyEvent: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_INITIALIZE:
      return {
        ...state,
        dailyEvent: action.dailyEvent,
        weeklyEvent: action.weeklyEvent,
      };

    case ACTION.SET_USER_DATA:
      return {
        ...state,
        userId: action.userId,
        userData: action.userData,
      };

    case ACTION.SHOW_DAILY:
      return {
        ...state,
        dailyEvent: action.dailyEvent,
      };

    case ACTION.SHOW_WEEKLY:
      return {
        ...state,
        weeklyEvent: action.weeklyEvent,
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
};

export default reducer;
