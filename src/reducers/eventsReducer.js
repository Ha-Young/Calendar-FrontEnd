import { RECEIVE_EVENT_DATA } from "../constants/actionTypes";

const initialState = {
  action: {}
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EVENT_DATA:
      return {
        ...state,
         action
      };
    default:
      return state;
  }
}

export default eventsReducer
