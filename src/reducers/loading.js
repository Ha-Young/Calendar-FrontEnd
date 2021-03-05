import { START_LOADING, STOP_LOADING, VIEW_ERROR } from "../constants/actionTypes";

export default function loading(state = false, action) {
  switch (action.type) {
    case START_LOADING:
      return true;

    case VIEW_ERROR:
    case STOP_LOADING:
      return false;

    default:
      return state;
  }
}
