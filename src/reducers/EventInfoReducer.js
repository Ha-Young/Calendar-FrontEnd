import { ADD_NEW_EVENT } from "../actions/constants";

const initialState = {
  eventTitle: "",
  eventDesc: "",
  startDay: "",
  startTime: "",
  endDay: "",
  endTime: "",
};

export const eventInfoReducer = (state = initialState, action) => {
  if(action.type === ADD_NEW_EVENT) {
    return {
      ...state,
      eventTitle: action.value,
      eventDesc: action.value,
      startDay: action.value,
      startTime: action.value,
      endDay: action.value,
      endTime: action.value,
    }
  };
  return state;
};
