import {
  SUBMIT_EVENT,
} from "../constants/actionTypes";

export default function events(state = {byId: {}, allIds: []}, action) {
  switch (action.type) {
    case SUBMIT_EVENT:
      return {};
    default:
      return state;
  }
}

export function sortEvent(payload) {
  return ({
    id: payload.date.format("YYYY-MM-DD"),
    
  });
}
