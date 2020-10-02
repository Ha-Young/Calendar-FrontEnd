
import { ADD_DAY, SUB_DAY, OPEN_MODAL, CLOSE_MODAL } from "../actions/constants";
import { addDays, subDays } from "date-fns";

const initialState = {
  date: new Date(),
  times: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  isModalOpen: false,
};

export const handleDateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DAY:
      return {
        ...state,
        date: addDays(state.date, 1),
      };
    case SUB_DAY:
      return {
        ...state,
        date: subDays(state.date, 1),
      };
    default:
      return state;
  }
};

export const handleModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};
