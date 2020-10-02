import moment from 'moment';
import { MOVE_DATE } from '../constants/actionTypes';

const today = moment().format('YYYY-MM-DD');

const initialState = {
  type: MOVE_DATE,
  date: today
};

function moveDateReducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_DATE:
      return {
        ...state,
        date: action.date
      };

    default:
      return state;
  }
};

export default moveDateReducer;
