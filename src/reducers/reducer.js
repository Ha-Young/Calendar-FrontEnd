import * as ActionTypes from '../constants/ActionTypes';
import { addDays } from 'date-fns';

const initialState = {
  view: 'daily',
  currentDate: new Date()
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_CURRENT_DATE:
      if (state.view === 'daily' && action.direction === 1) {
        return {
          view: 'daily',
          currentDate: addDays(state.currentDate, action.direction)
        };
      } else if (state.view === 'daily' && action.direction === -1) {
        return {
          view: 'daily',
          currentDate: addDays(state.currentDate, action.direction)
        };
      }
    case ActionTypes.CHANGE_DISPLAY_VIEW_WEEKLY:
      return {
        view: 'weekly',
        currentDate: new Date()
      };
    case ActionTypes.CHANGE_DISPLAY_VIEW_DAILY:
      return {
        view: 'daily',
        currentDate: new Date()
      };
    default:
      return state;
  }
}

export default reducer;
