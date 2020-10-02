import { MODE_WEEK, MODE_DAY } from '../constants/ActionType';

const initialState = {
  mode: MODE_WEEK,
};
const calendarModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODE_WEEK:
      return {
        mode: MODE_WEEK,
      };
    case MODE_DAY:
      return {
        mode: MODE_DAY,
      };
    default:
      return state;
  }
};

export default calendarModeReducer;
