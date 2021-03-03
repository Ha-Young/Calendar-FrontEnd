import { ADD_TITLE, ADD_DESCRIPTION, ADD_STARTDATE, ADD_ENDDATE } from "./actionTypes";

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
    case ADD_TITLE:
      return {
        ...state,
        title: {
          ...state.title,
          [action.id]: action.title
        }
      }
    case ADD_DESCRIPTION:
      return {
        ...state,
        description: {
          ...state.description,
          [action.id]: action.description
        }
      }
    case ADD_STARTDATE:
      return {
        ...state,
        startdate: {
          ...state.startdate,
          [action.id]: action.startdate
        }
      }
    case ADD_ENDDATE:
      return {
        ...state,
        enddate: {
          ...state.enddate,
          [action.id]: action.enddate
        }
      }
    default:
      return state;
  }
}
