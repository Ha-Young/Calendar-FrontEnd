import {
  INCREASE_DATE,
  DECREASE_DATE,
  CHANGE_DATE_UNIT,
} from "../constants/actionTypes";
import getCurrentDate from "../utils/getCurrentDate";

export const currentDate = (state = getCurrentDate(new Date()), action) => {
  const currentDate = new Date(state);

  switch (action.type) {
    case INCREASE_DATE:
      currentDate.setDate(currentDate.getDate() + action.degree);
      return getCurrentDate(currentDate);
    case DECREASE_DATE:
      currentDate.setDate(currentDate.getDate() - action.degree);
      return getCurrentDate(currentDate);
    default:
      return state;
  }
};

export const dateUnit = (state = "일", action) => {
  switch (action.type) {
    case CHANGE_DATE_UNIT:
      return action.dateUnit;
    default:
      return state;
  }
};
