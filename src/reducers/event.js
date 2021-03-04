import {
  ADD_EVENT,
} from "../constants/actionTypes";

const initialState = {
  "2021-03-04": {
    title: "mock",
    description: "data",
    date: "2021-03-04",
    startHour: "03:13",
    endHour: "06:23",
  },
  "2021-03-05": {
    title: "title",
    description: "desc",
    date: "2021-03-05",
    startHour: "14:43",
    endHour: "16:43",
  },
};

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
