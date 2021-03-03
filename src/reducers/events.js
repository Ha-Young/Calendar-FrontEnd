import { combineReducers } from "redux";

import { CREATE_EVNETS } from "../constants/actionTypes";

const initialStatus_byId = {
  "2021-03-03_12:2": {
    id: "2021-03-03_12:2",
    title: "밥먹기",
    description: "밥먹기",
    date: "2021-03-03",
    startDate: "2021-03-03_12",
    endDate: "2021-03-03_14",
    timeLength: 2,
  },
  "2021-03-01_12:2": {
    id: "2021-03-01_12:2",
    title: "밥먹기",
    description: "밥먹기",
    date: "2021-03-01",
    startDate: "2021-03-01_12",
    endDate: "2021-03-01_14",
    timeLength: 2,
  },
  "2021-03-04_13:4": {
    id: "2021-03-04_13:4",
    title: "밥먹기2",
    description: "밥먹기2",
    date: "2021-03-04",
    startDate: "2021-03-04_13",
    endDate: "2020-03-04_17",
    timeLength: 4,
  },
  "2021-03-04_18:3": {
    id: "2021-03-04_18:3",
    title: "집에가기",
    description: "집에가기",
    date: "2021-03-04",
    startDate: "2021-03-04_18",
    endDate: "2020-03-04_21",
    timeLength: 3,
  },
};

function byId(state = initialStatus_byId, action) {
  switch(action.type) {
    case CREATE_EVNETS:
      const event = action.payload;

      const newState = { ...state };
      newState[event.id] = event;

      return newState;
    default:
      return state;
  }
}

const initialStatus_allIds = ["2021-03-01_12:2", "2021-03-03_12:2", "2020-03-04_13:4"];

function allIds(state = initialStatus_allIds, action) {
  switch(action.type) {
    case CREATE_EVNETS:
      const event = action.payload;

      return state.concat(event.id);
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
