import { combineReducers } from "redux";

// example
// const visibleIds = (state = [], action) => {
//   switch (action.type) {
//     case RECEIVE_PRODUCTS:
//       return action.products.map(product => product.id);
//     default:
//       return state;
//   }
// };

const isViewModeDaily = (state = true, action) => {
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
