import { combineReducers } from "redux";
import * as types from "../constants/actionTypes";

export const byId = (state = {}, actions) => {
  switch (actions.type) {
    case types.GET_CALENDAR_DATA_SUCCESS: {
      const { payLoad: { events } } = actions;

      return {
        ...state,
        ...events,
        // ...Object.values(events).reduce((acc, val) => {
        //   if (!acc.hasOwnProperty(val.id)) {
        //     acc[val.id] = [];
        //   }

        //   acc[val.id].push(val);

        //   return acc;
        // }, {}),
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

      return Object.keys(events);
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

// export const getEventByPath = (state, id, path) =>
//   getEventById(state, id).filter((event) => event.path === path);

export const getEventByCurrentDate = (state, date) => {
  // return currentDates.reduce((acc, val) => {
  //   acc[val] = getEventById(state, val);

  //   return acc;
  // }, {});
  return state.allIds.reduce((acc, val) => {
    if (getEventById(state, val).date === date) {
      acc.push(getEventById(state, val));
    }

    return acc;
  }, []);
};

export default combineReducers({
  byId,
  allIds,
  isLoading,
  errorMessage,
});
