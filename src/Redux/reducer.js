import { ADD_SUBMIT_DATA } from "./actionTypes";

const reducer = (state = {byDate:{}, allDates: []}, action) => {

  switch(action.type) {
    case ADD_SUBMIT_DATA:
      return {
        byDate: {
          ...state.byDate,
          [action.schedule.date]: {...action.schedule}
        },
        allDates: [...state.allDates, action.schedule.date]
      };
    default:
      return {...state};
  }
};

export default reducer;

// switch(action.type) {
//   case ADD_SUBMIT_DATA:
//     return {
//       ...state,
//       [action.schedule.date]: { ...action.schedule }
//     };
//   default:
//     return {...state};
// }