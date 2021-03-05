import { RESET_ERROR, VIEW_ERROR } from "../constants/actionTypes";

export default function error(state="", action) {
  switch (action.type) {
    case VIEW_ERROR:
      return action.payload;

    case RESET_ERROR:

      return "";

    default:
      return state;
  }
}
