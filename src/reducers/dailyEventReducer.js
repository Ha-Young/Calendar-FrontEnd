import { ADD_EVENT } from '../constants/actionTypes';

const initialState = [
  {
    type: ADD_EVENT,
    eventId: '',
    eventDate: '',
    title: '',
    description: '',
    startTime: '',
    endTime: ''
  }
];

function dailyEventReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EVENT:
      if (state.length === 0)
        return {
          eventId: action.eventId,
          eventDate: action.eventDate,
          title: action.title,
          description: action.description,
          startTime: action.startTime,
          endTime: action.endTime
        }

      return state.concat(action);

    default:
      return state;
  }
}

export default dailyEventReducer;
