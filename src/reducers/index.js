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
      const eventTitle = action.eventInfo["event-title"];
      const eventDescription = action.eventInfo["event-description"];
      const eventStartYear = action.eventInfo["event-start-year"];
      const eventStartMonth = action.eventInfo["event-start-month"];
      const eventStartDate = action.eventInfo["event-start-date"];
      const eventStartHour = action.eventInfo["event-start-hour"];
      const eventEndYear = action.eventInfo["event-end-year"];
      const eventEndMonth = action.eventInfo["event-end-month"];
      const eventEndDate = action.eventInfo["event-end-date"];
      const eventEndHour = action.eventInfo["event-end-hour"];
      const eventDateId = `id-${eventStartYear}-${eventStartMonth}-${eventStartDate}`;
      const eventHourId = `id-${eventStartHour}`;

      state[eventDateId] = {
        ...state[eventDateId],
        [eventHourId]: {
          eventTitle,
          eventDescription,
          eventStartDate,
          eventStartMonth,
          eventStartDate,
          eventStartHour,
          eventEndDate,
          eventEndMonth,
          eventEndDate,
          eventEndHour
        }
      };

      console.log(state);

      return state
    default:
      return state;
  }
}

export default combineReducers({
  eventInfo
});
