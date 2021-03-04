import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../constants/actionTypes";
import { combineReducers } from "redux";
import produce from "immer";
import makeDateIndex from "../util/makeTreeBranch";
import getDateInfoFromId from "../util/getDateInfoFromId";

const eventListMock = {
  "2021-03-03-09-18" : {
    title: "커피는 더 맛있다.",
    description: "차가운 커피도 맛있다. 따듯한 커피도 맛있다. 에헤헤헤",
    date: "2021-03-03",
    startTime:"09",
    endTime:"18",
    length: 12,
    id: "2021-03-03-09-18",
  },

  "2021-03-02-15-18" : {
    title: "맹물 맛있다.",
    description: "따듯한 물 맛있다 에헤헤헤",
    date:"2021-03-02",
    startTime:"15",
    endTime:"18",
    length: 3,
    id: "2021-03-02-15-18",
  }
}

const dateIndexMock = {
  "2021": {
    "03": {
      "02": ["2021-03-02-15-18"],
      "03": ["2021-03-03-09-18"],
    }
  }
}

const eventList = (state = eventListMock, action) => {
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

    default:
      return state;
  }
}

const dateIndex = (state = dateIndexMock, action) => {
  switch (action.type) {
    case CREATE_EVENT: {
      const id = action.event.id;
      const { year, month, day } = getDateInfoFromId(id);

      const prevIds = state?.[year]?.[month]?.[day];
      const newIds = prevIds ? [...new Set([...prevIds, id])] : [id];

      return produce(state, (draftState) => {
        makeDateIndex(newIds, draftState, year, month, day);
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
      if (!idsFiltered.length) {
        idsFiltered = null;
      }

      const newStateFiltered = produce(state, (draftState) => {
        makeDateIndex(idsFiltered, draftState, prevYear, prevMonth, prevDay);
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
        makeDateIndex(newIds, draftState, newYear, newMonth, newDay);
      });

      return newState;
    }

    case DELETE_EVENT: {
      const id = action.event.id;
      const { year, month, day } = getDateInfoFromId(id);

      const prevIds = state[year][month][day];
      let newIds = prevIds.filter((id) => id !== id);
      if (!newIds.length) {
        newIds = null;
      }

      return produce(state, (draftState) => {
        makeDateIndex(newIds, draftState, year, month, day);
      });
    }

    default:
      return state;
  }
}

export default combineReducers({
  eventList,
  dateIndex,
});
