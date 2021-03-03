import moment from "moment";

import {
  PREV_DATE,
  NEXT_DATE,
  PREV_WEEK,
  NEXT_WEEK,
} from "../constants/actionTypes";

export default function date(state = moment(), action) {
  switch (action.type) {
    case PREV_DATE:
      return state.clone().subtract(1, "days");
    case NEXT_DATE:
      return state.clone().add(1, "days");
    case PREV_WEEK:
      return state.clone().subtract(7, "days");
    case NEXT_WEEK:
      return state.clone().add(7, "days");
    default:
      return state;
  }
}
