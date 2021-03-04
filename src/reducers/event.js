import {
  ADD_EVENT,
} from "../constants/actionTypes";

const initialState = {};

const event = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default event;
