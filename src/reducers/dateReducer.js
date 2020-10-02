import moment from 'moment';
import { ADD_EVENT, EDIT_EVENT, DELETE_EVENT } from "../constants/actionTypes";
import { addEvent, editEvent, deleteEvent } from "../actions/index";


const todayYear = moment().format('YY');
const todayMonth = moment().format('MM');
const todyaDay = moment().format('DD');

const initialState = {
  year: todayYear,
  month: todayMonth,
  day: todyaDay

};
/* Reducer 에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜 주어야 한다
   이 때, spread 연산자를 사용하면 편리 */
function dateReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      return {

      };
    case EDIT_EVENT:
      return {
        ...state,

      };
    case DELETE_EVENT:
      return {
        ...state,

      };
    default:
      return state;
  }
}

export default dateReducer;