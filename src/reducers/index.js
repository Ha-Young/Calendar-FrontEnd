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
  const previousDate = state.slice(0, 10).split("-");
  let newDate;

  switch (action.type) {
    case "SHOW_PREVIOUS":
      newDate = [previousDate[0], previousDate[1], `${Number(previousDate[2]) - 1}`].join("-");
      return state = dayjs(newDate).format();
    case "SHOW_NEXT":
      newDate = [previousDate[0], previousDate[1], `${Number(previousDate[2]) + 1}`].join("-");
      console.log(newDate);
      return state = dayjs(newDate).format();
    default:
      return state;
  }
}

export default combineReducers({
  viewMode,
  isLoggedIn,
  displayDate,
});
