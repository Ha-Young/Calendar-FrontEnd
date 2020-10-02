import { ADD_EVENT, DELETE_EVENT } from "../constants/actionTypes";

const initialState = [
  {
    type: ADD_EVENT,
    eventId: "",
    eventDate: "",
    title: "",
    description: "",
    startTime: "",
    endTime: ""
  }
];

function dailyEventReducer(state = initialState, action) {
  console.log("REDUCER 안에 EVENT", action);
  console.log("REDUCER 안에 state", state);

  switch (action.type) {
    case ADD_EVENT:
      console.log("ACTION", action.eventId);
      if (!action.eventId) {
        return {
          ...state,
          eventId: action.eventId,
          eventDate: action.eventDate,
          title: action.title,
          description: action.description,
          startTime: action.startTime,
          endTime: action.endTime
        }
      }

      // if (state.length === 1) {
      //   return {
      //     ...state[0],
      //     eventId: action.eventId,
      //     eventDate: action.eventDate,
      //     title: action.title,
      //     description: action.description,
      //     startTime: action.startTime,
      //     endTime: action.endTime
      //   }
      // }

      return state.concat(action);

    case DELETE_EVENT:
      return state.filter((currentState) => {
        if (currentState.eventId !== action.eventId) {
          return currentState;
        }
      });

    default:
      return state;
  }
}

export default dailyEventReducer;
