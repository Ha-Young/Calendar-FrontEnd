import { combineReducers } from "redux";

import { CREATE_EVNETS } from "../constants/actionTypes";

const initialStatus_byId = {
  "2021-03-10_12:2": {
    id: "2021-03-10_12:2",
    title: "밥먹기",
    description: "밥먹기",
    startDate: "2021-03-10_12",
    endDate: "2021-03-10_14",
  },
  "2020-03-11_12:2": {
    id: "2020-03-11_12:2",
    title: "밥먹기2",
    description: "밥먹기2",
    startDate: "2021-03-11_12",
    endDate: "2020-03-11_14",
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

const initialStatus_allIds = ["2021-03-10_12:2", "2020-03-11_12:2"];

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
