import { CREATED_EVNETS, DELETED_EVENTS, RECEIVE_DATE, RECEIVE_DATE_LIST, START_LOADING, UPDATED_EVENTS } from "../constants/actionTypes";

export default function loading(state = false, action) {
  switch (action.type) {
    case START_LOADING:
      return true;

    case CREATED_EVNETS:
    case UPDATED_EVENTS:
    case DELETED_EVENTS:
    case RECEIVE_DATE:
    case RECEIVE_DATE_LIST:
      return false;

    default:
      return state;
  }
}
