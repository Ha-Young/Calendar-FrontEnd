import { UPDATE_CURRENT_DATE } from '../constants/ActionTypes';
import { addDays } from 'date-fns';

const initialState = {
  view: 'daily',
  currentDate: new Date()
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_CURRENT_DATE:
      if (state.view === 'daily' && action.direction === 1) {
        return {
          view: 'daily',
          currentDate: addDays(state.currentDate, 1)
        };
      }
    default:
      return state;
  }
}

export default reducer;
