import { cloneDeep } from "lodash";
import { combineReducers } from "redux";

import { CREATED_EVNETS, DELETED_EVENTS, RECEIVE_DATE, RECEIVE_DATE_LIST, UPDATED_EVENTS } from "../constants/actionTypes";
import { concatOnNotExistElement } from "../utils/common";

const initialStatus_byId = {};

function byId(state = initialStatus_byId, action) {
  switch(action.type) {
    case CREATED_EVNETS:
    case UPDATED_EVENTS: {
      if (action.payload) {
        const event = action.payload;

        const newEventsById = cloneDeep(state);
        newEventsById[event.id] = event;

        return newEventsById;
      }
      return state;
    }
    case DELETED_EVENTS: {
      if (action.payload) {
        const newEventsById = cloneDeep(state);
        const { eventId } = action.payload;

        delete newEventsById[eventId];

        return newEventsById;
      }
      return state;
    }
    case RECEIVE_DATE: {
      if (action.payload) {
        const newEventsById = cloneDeep(state);

        const [dateKey] = Object.keys(action.payload);
        const events = action.payload[dateKey];

        for (const [key, value] of Object.entries(events)) {
          newEventsById[key] = value;
        }

        return newEventsById;
      }
      return state;
    }
    case RECEIVE_DATE_LIST: {
      if (action.payload) {
        const newEventsById = cloneDeep(state);

        const dateList = action.payload;

        for (const dateKey of Object.keys(dateList)) {
          if (!dateList[dateKey]) {
            continue;
          }

          const events = dateList[dateKey];

          for (const [key, value] of Object.entries(events)) {
            newEventsById[key] = value;
          }
        }

        return newEventsById;
      }

      return state;
    }
    default:
      return state;
  }
}

const initialStatus_allIds = [];

function allIds(state = initialStatus_allIds, action) {
  switch(action.type) {
    case CREATED_EVNETS:
      if (action.payload) {
        const event = action.payload;

        return concatOnNotExistElement(state, event.id);
      }
      return state;

    case DELETED_EVENTS:
      if (action.payload) {
        const { eventId } = action.payload;

        return state.filter(id => id !== eventId);
      }
      return state;

    case RECEIVE_DATE: {
      //Todo. 중복코드 제거 아래 LIST
      if (action.payload) {
        const [dateKey] = Object.keys(action.payload);
        const eventKeys = Object.keys(action.payload[dateKey]);

        return concatOnNotExistElement(state, eventKeys);
      }
      return state;
    }

    case RECEIVE_DATE_LIST: {
      if (action.payload) {

        const dateList = action.payload;

        let newState = [...state];

        for (const dateKey of Object.keys(dateList)) {
          if (!dateList[dateKey]) {
            continue;
          }

          const eventKeys = Object.keys(action.payload[dateKey]);

          newState = concatOnNotExistElement(newState, eventKeys);
        }

        return newState;
      }
      return state;
    }

    default:
      return state;
  }
}

export default combineReducers({
  byId,
  allIds,
});

export function getEvent(state, id) {
  return state.byId[id];
}
