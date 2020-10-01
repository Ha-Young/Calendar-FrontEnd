import { NEW_EVENT } from "../actions/constants";

const initialState = {
  taskTitle: "",
  taskDesc: "",
  startDay: "",
  startTime: "",
  endDay: "",
  endTime: "",
};

export const eventInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_EVENT:
      return {
        ...state,
        taskTitle: action.value,
        taskDesc: action.value,
        startDay: action.value,
        startTime: action.value,
        endDay: action.value,
        endTime: action.value,
      };
    default:
      return state;
  }
};
