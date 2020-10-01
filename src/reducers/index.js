import { combineReducers } from "redux";

const initialState = {
  viewMode: "DAILY",
  isLoggedIn: false,
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

export default combineReducers({
  viewMode,
  isLoggedIn,
});
