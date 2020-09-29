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

const viewMode = (state = "DAILY", action) => {
  switch (action.type) {
    case "VIEW_DAILY":
      return state = "DAILY";
    case "VIEW_WEEKLY":
      return state = "WEEKLY";
    default:
      return state;
  }
};

export default combineReducers({
  viewMode,
});
