import { getToday, addDate } from "../api/date";
/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */

let initialState = {
  currentPageDate: getToday(),
  eventList: {},
  eventKeyList: [],
  selectedEvent: {},
};

export default function reducer(state = initialState, action) {
  let newState = { ...state };

  function modifiedFirebaseId(Id) {
    const modified = {};

    for (let key in Id) {
      modified[key] = Id[key];
    }

    return modified;
  }

  switch (action.type) {
    case "ON_INITIAL_LOAD":
      const firebaseData = action.events;

      for (let currentKey in firebaseData) {
        const key = currentKey;
        newState.eventList[key] = [];
        newState.eventKeyList.push(key);

        for (let id in firebaseData[key]) {
          const event = modifiedFirebaseId(firebaseData[key][id]);
          event.Id = id;
          newState.eventList[key].push(event);
        }                                
      }
      break;
    case "ON_SUBMIT":
      if (state.eventKeyList.includes(action.key)) {
        newState.eventList[action.key].push(action.event);
      } else {
        newState.eventList[action.key] = [action.event];
        newState.eventKeyList.push(action.key);
      }
      break;
    case "CLICK_LEFT":
      newState.currentPageDate = addDate(state.currentPageDate, {days: action.value});
      break;
    case "CLICK_RIGHT":
      newState.currentPageDate = addDate(state.currentPageDate, {days: action.value});
      break;
    case "SET_SELECTED_EVENT":
      newState.selectedEvent = action.selectedEvent;
      break;
    default:
      break;
  }

  return newState;
}
