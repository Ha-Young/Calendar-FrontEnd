import { combineReducers } from "redux";
import * as types from "../constants/actionTypes";

export const byId = (state = {}, actions) => {
  switch (actions.type) {
    case types.GET_CALENDAR_DATA_SUCCESS: {
      const { payLoad: { events } } = actions;

      return {
        ...state,
        ...Object.values(events).reduce((acc, val) => {
          if (!acc.hasOwnProperty(val.id)) {
            acc[val.id] = [];
          }

          acc[val.id].push(val);

          return acc;
        }, {}),
      }
    }
    default:
      return state;
  }
};

export const allIds = (state = [], actions) => {
  switch (actions.type) {
    case types.GET_CALENDAR_DATA_SUCCESS: {
      const { payLoad: { events } } = actions;

      return Object.values(events).reduce((acc, event) => {
        if (!acc.includes(event.id)) {
          acc.push(event.id);
        }

        return acc;
      }, []);
    }
    default:
      return state;
  }
};

export const isLoading = (state = true, actions) => {
  switch (actions.type) {
    case types.GET_CALENDAR_DATA_SUCCESS: {
      return actions.payLoad.isLoading;
    }
    default:
      return state;
  }
};

export const errorMessage = (state = "", actions) => {
  switch (actions.type) {
    case types.GET_CALENDAR_DATA_SUCCESS: {
      return actions.payLoad.errorMessage;
    }
    default:
      return state;
  }
};

export const getEventById = (state, id) => state.byId[id];

export const getEventsByCurrentDates = (state, currentDates) => {
  // return currentDates.reduce((acc, val) => {
  //   acc[val] = getEventById(state, val);

  //   return acc;
  // }, {});
  return currentDates.map(id => getEventById(state, id));
};

export default combineReducers({
  byId,
  allIds,
  isLoading,
  errorMessage,
});
