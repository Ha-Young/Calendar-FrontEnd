import { combineReducers } from "redux";
import * as types from "../constants/actionTypes";

export const byId = (state = {}, actions) => {
  switch (actions.type) {
    case types.GET_CALENDAR_DATA_SUCCESS: {     
      return {
        ...state,
        ...actions.payLoad.events,
      }
    }
    default:
      return state;
  }
};

export const allIds = (state =[], actions) => {
  switch (actions.type) {
    case types.GET_CALENDAR_DATA_SUCCESS: {      
      return Object.keys(actions.payLoad.events);
    }
    case types.SEND_EVENT_DATA_SUCCESS: {
      
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

export default combineReducers({
  byId,
  allIds,
  isLoading,
  errorMessage,
});

const datelist = {
  // isLoading: true,
  // isError: false,
  // calender: {
  //   byId: {
  //     "2021/10/20": {
  //       id: "2021/10/20",
  //       events: ["event1", "event2"],
  //     },
  //     "2021/10/21": {
  //       id: "2021/10/21",
  //       events: ["event3", "event4"],
  //     },
  //     "2021/10/22": {
  //       id: "2021/10/22",
  //       events: ["event5", "event6"],
  //     },
  //     "2021/10/23": {
  //       id: "2021/10/23",
  //       events: [],
  //     },
  //   },
  //   allIds: ["2021/10/20", "2021/10/21", "2021/10/22", "2021/10/23"],
  // },
  // events: {
  //   byId: {
  //     "event1": {
  //       id: "event1",
  //       title: "happy",
  //       description: "we will make cake",
  //       start: "2:00",
  //       end: "4:00",
  //       color: "pink",
  //     },
  //   },
  //   allIds: ["event1", "event2", "event3", "event4", "event5", "event6"],
  // },
};
