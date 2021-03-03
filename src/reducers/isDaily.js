import {
  TOGGLE_VIEW_TYPE,
} from "../constants/actionTypes";

export default function isDaily(state = true, action) {
  switch (action.type) {
    case TOGGLE_VIEW_TYPE:
      return !state;
    default:
      return state;
  }
}
