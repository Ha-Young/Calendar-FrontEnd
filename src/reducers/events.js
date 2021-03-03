import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "../constants/actionTypes";
import { combineReducers } from "redux";
import produce from "immer";
import makeDateIndex from "../util/makeTreeBranch";
import getDateInfoFromId from "../util/getDateInfoFromId";

const eventListMock = {
  "2021-03-03-09-18" : {
    title: "커피는 더 맛있다.",
    description: "차가운 커피도 맛있다. 따듯한 커피도 맛있다. 에헤헤헤",
    startDate: new Date('March 03, 2021 09:00:00'),
    endDate: new Date('March 03, 2021 21:00:00'),
    id: "2021-03-03-09-18",
  },

  "2021-03-02-15-18" : {
    title: "맹물 맛있다.",
    description: "따듯한 물 맛있다 에헤헤헤",
    startDate: new Date('March 02, 2021 15:00:00'),
    endDate: new Date('March 02, 2021 18:00:00'),
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
      const newIds = prevIds ? [...prevIds, id] : [id];

      return produce(state, (draftState) => {
        makeDateIndex(newIds, draftState, year, month, day);
      });
    }

    case UPDATE_EVENT: {
      const prevId = action.prevEvent.id;
      const { 
        year: prevYear, 
        month: prevMonth, 
        day: prevDay 
      } = getDateInfoFromId(prevId);
      
      const idsBeforeFilter = state[prevYear][prevMonth][prevDay];
      const idsAfterFilter = idsBeforeFilter.filter((id) => id !== prevId);

      const newState = produce(state, (draftState) => {
        makeDateIndex(idsAfterFilter, draftState, prevYear, prevMonth, prevDay);
      });

      const newId = action.newEvent.id;
      const {
        year: newYear,
        month: newMonth,
        day: newDay,
      } = getDateInfoFromId(newId);

      const prevIds = state?.[newYear]?.[newMonth]?.[newDay];
      const newIds = prevIds ? [...prevIds, newId] : [newId];

      makeDateIndex(newIds, newState, newYear, newMonth, newDay);

      return newState;
    }

    case DELETE_EVENT: {
      const id = action.event.id;
      const { year, month, day } = getDateInfoFromId(id);

      const prevIds = state[year][month][day];
      const newIds = prevIds.filter((id) => id !== id);

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
