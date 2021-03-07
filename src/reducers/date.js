import { SET_CURRENT_DATE, SET_CURRENT_WEEK, FORWARD_ONE_DAY, BACKWARD_ONE_DAY, FORWARD_ONE_WEEK, BACKWARD_ONE_WEEK, } from '../constants/actionTypes';
import { DAYS, WEEKS } from '../constants/dateFormats';
import { getThisWeekSunAndSat, moveDays } from '../utils/dateUtil';

const initialDateState = {
  currentDate: '',
  currentWeek: ''
};

const FORWARD_ONE = 1;
const BACKWARD_ONE = -1;

export default function dateReducer(state = initialDateState, action) {
  let movedDay;
  switch (action.type) {
    case SET_CURRENT_DATE:   
      return {
        ...state,
        currentDate: action.currentDate
      };
    case SET_CURRENT_WEEK:
      return {
        ...state,
        currentWeek: action.currentWeek
      };
    case FORWARD_ONE_DAY:
      movedDay = moveDays(action.currentDate, FORWARD_ONE, DAYS);
      return {
        ...state,
        currentDate: movedDay,
        currentWeek: getThisWeekSunAndSat(movedDay)
      };
    case BACKWARD_ONE_DAY:
      movedDay = moveDays(action.currentDate, BACKWARD_ONE, DAYS);
      return {
        ...state,
        currentDate: movedDay,
        currentWeek: getThisWeekSunAndSat(movedDay)
      };
    case FORWARD_ONE_WEEK:
      movedDay = moveDays(action.currentDate, FORWARD_ONE, WEEKS);
      return {
        ...state,
        currentDate: movedDay,
        currentWeek: getThisWeekSunAndSat(movedDay)
      };
    case BACKWARD_ONE_WEEK:
      movedDay = moveDays(action.currentDate, BACKWARD_ONE, WEEKS);
      return {
        ...state,
        currentDate: movedDay,
        currentWeek: getThisWeekSunAndSat(movedDay)
      };
    default:
      return state;
  }
}
