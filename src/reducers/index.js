import { combineReducers } from "redux";
import * as dayjs from "dayjs";

const initialState = {
  viewMode: "DAILY",
  isLoggedIn: false,
  newEventTitle: "",
  newEventDescription: "",
  newEventDate: "",
  newEventStartTime: "",
  newEventFinishTime: "",
  displayDate: dayjs().format(),
  eventData: {},
};

const viewMode = (state = initialState.viewMode, action) => {
  switch (action.type) {
    case "SHOW_DAILY":
      return state = "DAILY";
    case "SHOW_WEEKLY":
      return state = "WEEKLY";
    default:
      return state;
  }
};

const isLoggedIn = (state = initialState.isLoggedIn, action) => {
  switch (action.type) {
    case "LOGIN":
      return state = true;
    case "LOGOUT":
      return state = false;
    default:
      return state;
  }
};

const displayDate = (state = initialState.displayDate, action) => {
  let previousDate = state.slice(0, 10).split("-");
  let newDate;

  switch (action.type) {
    case "SHOW_PREVIOUS_DAY":
      newDate = [previousDate[0], previousDate[1], `${Number(previousDate[2]) - 1}`].join("-");
      return state = dayjs(newDate).format();
    case "SHOW_NEXT_DAY":
      newDate = [previousDate[0], previousDate[1], `${Number(previousDate[2]) + 1}`].join("-");
      return state = dayjs(newDate).format();
    case "SHOW_PREVIOUS_WEEK":
      for (let i = 0; i < 7; i++) {
        newDate = [previousDate[0], previousDate[1], `${Number(previousDate[2]) - 1}`].join("-");
        previousDate = dayjs(newDate).format().slice(0, 10).split("-");
      }
      return state = dayjs(newDate).format();
    case "SHOW_NEXT_WEEK":
      for (let i = 0; i < 7; i++) {
        newDate = [previousDate[0], previousDate[1], `${Number(previousDate[2]) + 1}`].join("-");
        previousDate = dayjs(newDate).format().slice(0, 10).split("-");
      }
      return state = dayjs(newDate).format();
    default:
      return state;
  }
}

const eventData = (state = initialState.eventData, action) => {
  switch (action.type) {
    case "FETCH_EVENTS":
      return {
        ...state,

      };
    default:
      return state;
  }
}

export default combineReducers({
  viewMode,
  isLoggedIn,
  displayDate,
  eventData,
});
