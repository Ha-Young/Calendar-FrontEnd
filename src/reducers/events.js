import { UPDATE_EVENT } from "../constants/actionTypes";

export const events = (state = [], action) => {
  switch (action.type) {
    case UPDATE_EVENT:
      console.log(action.event);
      return state.concat(action.event);
    default:
      return state;
  }
};
