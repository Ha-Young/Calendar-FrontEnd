import { ADD_TO_EVENTS, REMOVE_ALL_EVENTS, REMOVE_EVENTS } from "../../constants/actionTypes"

const initialState = {};

export default function events(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case ADD_TO_EVENTS: {
      const { date, event } = payload;
      
      return {
        ...state,
        [date]: Object.assign(state[date] ?? {}, event),
      };
    }
    case REMOVE_EVENTS: {
      const { date } = payload;
      const newState = {...state};
      delete newState[date];

      return newState;
    }
    case REMOVE_ALL_EVENTS:
      return initialState;
    default:
      return {
        ...state,
      };
  }
}
