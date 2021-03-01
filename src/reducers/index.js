/*

  Reducers

  ref: https://github.com/reduxjs/redux/blob/master/examples/shopping-cart/src/reducers/index.js

  우선 하나의 reducer로 작업을 시작하고, reducer의 로직이 많아지면 `combineReducers`를 이용해 모듈을 분리해보세요.
  - Don't optimize pre-maturely!

 */
import { combineReducers } from "redux";
import { addDays, subDays } from "date-fns";
import * as types from "../constants/actionTypes";

const DAILY_INTERVAL = 1;
const WEEKLIY_INTERVAL = 7;

const initialState = {
  isDaily: true,
  interval: DAILY_INTERVAL,
  currentDate: new Date(),
};

export const calendarInfoReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case types.CHANGE_CALENDAR_TYPE: {
      return {
        ...state,
        isDaily: actions.payLoad.isDaily,
        interval: actions.payLoad.interval,
      };
    }
    case types.ADD_DATE: {
      return {
        ...state,
        currentDate: addDays(state.currentDate, state.interval),
      };
    }
    case types.SUBTRACT_DATE: {
      return {
        ...state,
        currentDate: subDays(state.currentDate, state.interval),
      };
    }
    default:
      return state;
  }
};

// export const interval = (state = DAILY_INTERVAL, actions) => {
//   switch (actions.type) {
//     case types.CHANGE_CALENDAR_TYPE:
//       return state = actions.payLoad.interval;
//     default:
//       return state;
//   }
// };

// export const currentDate = (state = new Date(), actions) => {
//   switch (actions.type) {
//     case types.ADD_DATE:
//       return state;
//     case types.SUBTRACT_DATE:
//       return state;
//     default:
//       return state;
//   }
// };


export const getIsDailyCalendar = (state) => state.isDaily;
export const getCalendarInterval = (state) => state.interval;

const datelist = {
  // isLoading: false,
  // isError: false,
  date: new Date(),
  isDaily: true,
  interval: DAILY_INTERVAL,
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

export default combineReducers({
  calendarInfoReducer,
});
