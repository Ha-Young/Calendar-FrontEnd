import { RECEIVE_EVENT_DATA } from "../constants/actionTypes";

const initialState = {
  events: {
    byDateAndTime: {},
    allDateAndTime : []
  }
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_EVENT_DATA:
      return {
        ...state,
        events: {
          byDateAndTime: {
            ...state.events.byDateAndTime,
            [action.dateAndTime]: {
              title: action.eventData.title,
              description: action.eventData.description,
              date: action.eventData.date,
              startTime: action.eventData.startTime,
              endTime: action.eventData.endTime
            }
          },
          allDateAndTime: [...state.events.allDateAndTime, action.dateAndTime]
        }
      };
    default:
      return state;
  }
}

export default eventsReducer
