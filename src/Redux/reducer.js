import {
  ADD_SUBMIT_DATA,
  SHOW_SCHEDULE_INFO ,
  SET_INITIAL_DATA
} from "./actionTypes";

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

    case SET_INITIAL_DATA:
      let arr;

      if (action.initialData) {
        arr = Object.keys(action.initialData);
      } else {
        arr = [];
      }

      return {
        byDate: {
          ...action.initialData
        },
        allDates: [...arr],
        isScheduleShown: true
      }

    default:
      return {...state};
  }
};

export default reducer;
