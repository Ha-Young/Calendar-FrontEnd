import { combineReducers } from "redux";
import * as types from "../constants/actionTypes";

export const byId = (state = {}, actions) => {
  switch (actions.type) {
    case types.GET_EVENT_DATA_SUCCESS: {
      const {
        payLoad: {
          events,
        }
      } = actions;

      if (events === null) return state;

      return {
        ...state,
        ...events,
      };
    }
    case types.SET_EVENT_DATA_SUCCESS:
    case types.UPDATE_EVENT_DATA_SUCCESS: {
      const {
        payLoad: {
          events,
        }
      } = actions;

      return {
        ...state,
        [events.id]: events,
      };
    }
    case types.DELETE_EVENT_DATA_SUCCESS: {
      const {
        payLoad: {
          events,
        }
      } = actions;

      const savedEvents = { ...state };
      delete savedEvents[events.id];

      return savedEvents;
    }
    default:
      return state;
  }
};

export const allIds = (state = [], actions) => {
  switch (actions.type) {
    case types.GET_EVENT_DATA_SUCCESS: {
      const {
        payLoad: {
          events,
        }
      } = actions;

      if (events === null) return state;

      const concatedState = state.concat(Object.keys(events));
      const copiedState = new Set(concatedState);

      return [...copiedState];
    }
    case types.SET_EVENT_DATA_SUCCESS: {
      const {
        payLoad: {
          events,
        }
      } = actions;

      return [...state, events.id];
    }
    case types.DELETE_EVENT_DATA_SUCCESS: {
      const {
        payLoad: {
          events,
        }
      } = actions;

      return state.filter((event) => event.id !== events.id);
    }
    default:
      return state;
  }
};

export const isLoading = (state = true, actions) => {
  switch (actions.type) {
    case types.GET_EVENT_DATA_SUCCESS:
    case types.SET_EVENT_DATA_SUCCESS:
    case types.UPDATE_EVENT_DATA_SUCCESS:
    case types.DELETE_EVENT_DATA_SUCCESS:
    case types.GET_EVENT_DATA_FAIL:
    case types.SET_EVENT_DATA_FAIL:
    case types.UPDATE_EVENT_DATA_FAIL:
    case types.DELETE_EVENT_DATA_FAIL: {
      return false;
    }
    case types.GET_EVENT_DATA:
    case types.SET_EVENT_DATA:
    case types.UPDATE_EVENT_DATA:
    case types.DELETE_EVENT_DATA: {
      return true;
    }
    default:
      return state;
  }
};

export const errorMessage = (state = "", actions) => {
  switch (actions.type) {
    case types.GET_EVENT_DATA_FAIL:
    case types.SET_EVENT_DATA_FAIL:
    case types.UPDATE_EVENT_DATA_FAIL:
    case types.DELETE_EVENT_DATA_FAIL: {
      return actions;
    }
    case types.GET_EVENT_DATA:
    case types.SET_EVENT_DATA:
    case types.UPDATE_EVENT_DATA:
    case types.DELETE_EVENT_DATA: {
      return "";
    }
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds,
  isLoading,
  errorMessage,
});

export const getEventById = (state, id) => state.byId[id];

export const getEventByCurrentDate = (state, date) => {
  return state.allIds.reduce((acc, val) => {
    if (getEventById(state, val)?.date === date) {
      acc.push(getEventById(state, val));
    }

    return acc;
  }, []);
};
