import { cloneDeep } from "lodash";
import { combineReducers } from "redux";

import { CHANGE_DATE, CHANGE_VIEW_OPTION, CREATED_EVNETS, DELETED_EVENTS, RECEIVE_DATE,  RECEIVE_DATE_LIST, UPDATED_EVENTS } from "../constants/actionTypes";
import { VIEW_OPTION } from "../constants/stateTypes";
import { concatOnNotExistElement } from "../utils/common";
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
    case CREATED_EVNETS:
    case UPDATED_EVENTS: {
      if (action.payload) {
        const event = action.payload;
        const eventId = event.id;
        const dateId = event.date;
        const newDateById = cloneDeep(state);

        if (dateId in newDateById) {
          newDateById[dateId].events = concatOnNotExistElement(newDateById[dateId].events, eventId);
        } else {
          newDateById[dateId] = {
            id: dateId,
            events: [eventId],
          };
        }
        return newDateById;
      }
      return state;
    }
    case DELETED_EVENTS: {
      if (action.payload) {
        const newDateById = cloneDeep(state);
        const { eventId, date } = action.payload;
        newDateById[date].events = newDateById[date].events.filter(id => id !== eventId);

        return newDateById;
      }
      return state;
    }
    case RECEIVE_DATE: {
      //ToDo. 아래 DATELIST 중복 합치기
      if (action.payload) {
        const newDateById = cloneDeep(state);

        const [dateKey] = Object.keys(action.payload);
        const eventKeys = Object.keys(action.payload[dateKey]);

        const prevEventList = state[dateKey] ? state[dateKey].events : [];

        const newDate = {
          id: dateKey,
          events: concatOnNotExistElement(prevEventList, eventKeys),
        };

        newDateById[dateKey] = newDate;

        return newDateById;
      }

      return state;
    }

    case RECEIVE_DATE_LIST: {
      if (action.payload) {
        const newDateById = cloneDeep(state);

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
            events: concatOnNotExistElement(prevEventList, eventKeys),
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
