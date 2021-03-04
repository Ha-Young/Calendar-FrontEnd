import { ADD_SUBMIT_DATA, SHOW_SCHEDULE_INFO } from "./actionTypes";

const initialState = {
  byDate: {},
  allDates: [],
  isScheduleShown: false
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case ADD_SUBMIT_DATA:
      return {
        byDate: {
          ...state.byDate,
          [action.schedule.date]: {...action.schedule}
        },
        allDates: [...state.allDates, action.schedule.date],
        isScheduleShown: false
      }
    case SHOW_SCHEDULE_INFO:
      return {
        byDate: {
          ...state.byDate
        },
        allDates: state.allDates,
        isScheduleShown: true
      }
    default:
      return {...state};
  }
};

export default reducer;
