import { combineReducers } from "redux";

const initialState = {
  viewMode: "DAILY",
  isLoggedIn: false,
  newEventTitle: "",
  newEventDescription: "",
  newEventDate: "",
  newEventStartTime: "",
  newEventFinishTime: "",
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

const newEventTitle = (state = initialState.newEventTitle, action) => {
  switch (action.type) {
    case "SET_NEW_EVENT_TITLE":

  }
}

export default combineReducers({
  viewMode,
  isLoggedIn,
});
