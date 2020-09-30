import { MODE_WEEK, MODE_DAY } from '../constants/ActionType';

const modes = (state = { mode: MODE_WEEK }, action) => {
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

export default modes;