import { combineReducers } from 'redux';
import manageEvent, { eventDetail } from './manageEvent';

const rootReducer = combineReducers({ manageEvent, eventDetail });
// events: manageEvent 이런 식으로..! ventDetail -> eventList... 배열이니까 바꾸는 것 고민, manageEvent도 명사로 바꾸기
export default rootReducer;
