import { combineReducers } from "redux";

const initialState = {
  isViewModeDaily: true,
  month: "",
};

const isViewModeDaily = (state = initialState.isViewModeDaily, action) => {
  switch (action.type) {
    case "CHANGE_VIEW_MODE":
      return state = !state;
    default:
      return !state;
  }
};

export default combineReducers({
  isViewModeDaily,
});
