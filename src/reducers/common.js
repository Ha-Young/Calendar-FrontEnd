import { CHANGE_DATE, CHANGE_VIEW_OPTION } from "../constants/actionTypes";
import { VIEW_OPTION } from "../constants/stateTypes";
import { getCurrentDateStr } from "../utils/date";

export function viewOption(state = VIEW_OPTION.DAILY, action) {
  switch (action.type) {
    case CHANGE_VIEW_OPTION:
      return action.payload.viewOption;

    default:
      return state;
  }
}

export function currentDate(state = getCurrentDateStr(), action) {
  switch (action.type) {
    case CHANGE_DATE:
      return action.payload.currentDate;

    default:
      return state;
  }
}
