
import {LOG_IN, CLICK_PREV_BUTTON, CLICK_NEXT_BUTTON} from "../actions/constants";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import subDays from 'date-fns/subDays';

const initialState = {
  date: 2020,
};

const changeDate = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_PREV_BUTTON:
      return {
        ...state,
        date: state.date + 1,
      };
    case CLICK_NEXT_BUTTON:
      return {
        ...state,
        date: state.date - 1,
      };
    default:
      return state;
  }
}

export default changeDate;