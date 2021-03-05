import { combineReducers } from "redux";
import produce from "immer";
import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, INIT_EVENTS } from "../constants/actionTypes";
import makeNestedObject from "../util/makeNestedObject";
import getDateInfoFromId from "../util/getDateInfoFromId";

const eventList = (state = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      return ({
        ...state,
        [action.event.id]: action.event,
      });
    }

    case UPDATE_EVENT: {
      return produce(state, (draftState) => {
        delete draftState[action.prevEvent.id];
        draftState[action.newEvent.id] = action.newEvent;
      });
    }

    case DELETE_EVENT: {
      return produce(state, (draftState) => {
        delete draftState[action.event.id];
      });
    }

    case INIT_EVENTS: {
      return action.events;
    }

    default:
      return state;
  }
}

const dateIndex = (state = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      const id = action.event.id;
      const { year, month, day } = getDateInfoFromId(id);

      const prevIds = state?.[year]?.[month]?.[day];
      const newIds = prevIds ? [...new Set([...prevIds, id])] : [id];

      return produce(state, (draftState) => {
        makeNestedObject(newIds, draftState, year, month, day);
      });
    }

    case UPDATE_EVENT: {
      const prevId = action.prevEvent.id;
      const { 
        year: prevYear, 
        month: prevMonth, 
        day: prevDay,
      } = getDateInfoFromId(prevId);
      
      const idsNotFiltered = state[prevYear][prevMonth][prevDay];
      let idsFiltered = idsNotFiltered.filter((id) => id !== prevId);
      if (!(idsFiltered.length)) {
        idsFiltered = null;
      }

      const newStateFiltered = produce(state, (draftState) => {
        makeNestedObject(idsFiltered, draftState, prevYear, prevMonth, prevDay);
      });

      const newId = action.newEvent.id;
      const {
        year: newYear,
        month: newMonth,
        day: newDay,
      } = getDateInfoFromId(newId);

      const prevIds = newStateFiltered?.[newYear]?.[newMonth]?.[newDay];
      const newIds = prevIds ? [...new Set([...prevIds, newId])] : [newId];

      const newState = produce(newStateFiltered, (draftState) => {
        makeNestedObject(newIds, draftState, newYear, newMonth, newDay);
      });

      return newState;
    }

    case DELETE_EVENT: {
      const idToBeDeleted = action.event.id;
      const { year, month, day } = getDateInfoFromId(idToBeDeleted);

      const prevIds = state[year][month][day];
      let newIds = prevIds.filter((id) => id !== idToBeDeleted);
      if (!(newIds.length)) {
        newIds = null;
      }

      return produce(state, (draftState) => {
        makeNestedObject(newIds, draftState, year, month, day);
      });
    }

    case INIT_EVENTS: {
      let newState = state;

      for (const id in action.events) {
        const { year, month, day } = getDateInfoFromId(id);

        const prevIds = newState?.[year]?.[month]?.[day];
        const newIds = prevIds ? [...new Set([...prevIds, id])] : [id];

        newState = produce(newState, (draftState) => {
          makeNestedObject(newIds, draftState, year, month, day);
        });
      }

      return newState;
    }

    default:
      return state;
  }
}

export default combineReducers({
  eventList,
  dateIndex,
});
