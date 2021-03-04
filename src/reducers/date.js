import { combineReducers } from "redux";

import { CHANGE_DATE, CHANGE_VIEW_OPTION, CREATE_EVNETS,  RECEIVE_DATE,  RECEIVE_DATE_LIST,  RECEIVE_EVENTS } from "../constants/actionTypes";
import { VIEW_OPTION } from "../constants/stateTypes";
import { getCurrentDateStr, getWeekDateListBasedOnDate } from "../utils/date";

const initialStatus_byId = {
  // "2021-03-03": {
  //   id: "2021-03-03",
  //   events: ["2021-03-03_12:2"],
  // },
  // "2021-03-01": {
  //   id: "2021-03-01",
  //   events: ["2021-03-01_12:2"],
  // },
  // "2021-03-04": {
  //   id: "2021-03-04",
  //   events: ["2021-03-04_13:4", "2021-03-04_18:3"],
  // },
};

function byId(state = initialStatus_byId, action) {
  switch(action.type) {
    case CREATE_EVNETS: {
      const event = action.payload;
      const eventId = event.id;
      const dateId = event.date;
      const newState = { ...state };

      if (dateId in newState) {
        newState[dateId].events = newState[dateId].events.concat(eventId);
      } else {
        newState[dateId] = {
          id: dateId,
          events: [eventId],
        };
      }
      return newState;
    }
    case RECEIVE_DATE: {
      //ToDo. 아래 DATELIST 중복 합치기
      const newDateById = { ...state };

      if (action.payload) {
        const [dateKey] = Object.keys(action.payload);
        const eventKeys = Object.keys(action.payload[dateKey]);

        const prevEventList = state[dateKey] ? state[dateKey].events : [];

        const newDate = {
          id: dateKey,
          events: prevEventList.concat(eventKeys),
        };

        newDateById[dateKey] = newDate;

        return newDateById;
      }

      return newDateById;
    }

    case RECEIVE_DATE_LIST: {
      if (action.payload) {
        const newDateById = { ...state };

        const dateList = action.payload;

        for (const dateKey of Object.keys(dateList)) {
          if (!dateList[dateKey]) {
            newDateById[dateKey] = {
              id: dateKey,
              events: [],
            };
  
            continue;
          }
  
          const eventKeys = Object.keys(dateList[dateKey]);
  
          const prevEventList = state[dateKey] ? state[dateKey].events : [];
  
          const newDate = {
            id: dateKey,
            events: prevEventList.concat(eventKeys),
          };
  
          newDateById[dateKey] = newDate;
        }

        return newDateById;
      }

      return state;
    }
    default:
      return state;
  }
}

function visibleId(state = [getCurrentDateStr()], action) {
  let newVisibleId = state;

  switch(action.type) {
    case CHANGE_DATE:
      newVisibleId = getVisibleId({ ...action.payload });
      return newVisibleId;

    case CHANGE_VIEW_OPTION:
      newVisibleId = getVisibleId({ ...action.payload });
      return newVisibleId;

    default:
      return state;
  }
}

export default combineReducers({
  byId,
  visibleId,
});

export function getEventsOnDate(state, id) {
  if (state.byId[id] && state.byId[id].events) {
    return state.byId[id].events;
  }

  return [];
}

function getVisibleId({ currentDate, viewOption }) {
  if (viewOption === VIEW_OPTION.WEEKLY) {
    const weekDateListWithCalcDay = getWeekDateListBasedOnDate(currentDate);
    const weekDateListOnlyDay = weekDateListWithCalcDay.map(({ date }) => date);
    return weekDateListOnlyDay;
  }

  return [currentDate];
}
