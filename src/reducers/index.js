/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { combineReducers } from "redux";

const eventInfo = (state = {}, action) => {
  switch (action.type) {
    case "SUBMIT_EVENTINFO":
      const eventInfo = action.eventInfo;
      const startYear = eventInfo["start-year"];
      const startMonth = eventInfo["start-month"];
      const startDate = eventInfo["start-date"];
      const startHour = eventInfo["start-hour"];
      const dateId = `id-${startYear}-${startMonth}-${startDate}`;
      const hourId = `id-${startHour}`;

      state[dateId] = {
        ...state[dateId],
        [hourId]: eventInfo
      };
      console.log(state);
      return state;
    default:
      return state;
  }
}

const eventIdRoute = (state = "", action) => {
  switch (action.type) {
    case "ROUTE_EVENTID":
      return state = action.eventId;
    default:
      return state;
  }
};

const isDayCalendar = (state = true, action) => {
  switch (action.type) {
    case "SHOW_DAYCALENDAR":
      return state = true;
    case "SHOW_WEEKCALENDAR":
      return state = false;
    default:
      return state;
  }
};

export default combineReducers({
  eventInfo,
  eventIdRoute,
  isDayCalendar
});
