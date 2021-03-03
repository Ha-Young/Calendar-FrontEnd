import { ADD_SUBMIT_DATA } from "./actionTypes";

const reducer = (state = { events: [] }, action) => {

  switch(action.type) {
    case ADD_SUBMIT_DATA:
      return {
        ...state,
        [action.schedule.keyId]: { ...action.schedule },
        events: [...state.events, action.schedule]
      };
    default:
      return {...state};
  }
};

export default reducer;
