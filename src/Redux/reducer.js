import { ADD_SUBMIT_DATA } from "./actionTypes";

const initialState = {
  title: {
  },
  description: {
  },
  startdate: {
  },
  enddate: {
  }
};

export default function reducer(state = initialState, action) {

  switch(action.type) {
    case ADD_SUBMIT_DATA:
      return {
        title: {
          ...state.title,
          [action.id]: action.title
        },
        description: {
          ...state.description,
          [action.id]: action.description
        },
        startdate: {
          ...state.startdate,
          [action.id]: action.startdate
        },
        enddate: {
          ...state.enddate,
          [action.id]: action.enddate
        }
      }
    default:
      return state;
  }
}
