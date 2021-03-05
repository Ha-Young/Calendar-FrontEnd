import produce from "immer";

const initialState = {
  eventMode: "create",
  events: {
    byDates: {},
  },
};

export default function event(state = initialState, action) {
  switch (action.type) {
    case "SET_CREATE_EVENT_MODE":
      return {
        ...state,
        eventMode: "create",
      };
    case "SET_UPDATE_EVENT_MODE":
      return {
        ...state,
        eventMode: "update",
      };
    case "SAVE_EVENT":
      const result  = {};
      const eventDate = action.date;
      const eventList = action.eventList;

      for (let i = 0; i < eventList.length; i++) {
        result[eventList[i].startTime] = eventList[i];
      }

      return produce(state, draft => {
        const [ startTime ] = Object.keys(result);

        if (startTime === undefined) {
          draft.events.byDates[eventDate] = result;
          return;
        }

        if (!draft.events.byDates[eventDate]) {
          draft.events.byDates[eventDate] = result;
        } else {
          draft.events.byDates[eventDate][startTime] = result[startTime];
        }
      });
    case "DELETE_EVENT":
      return produce(state, draft => {
        delete draft.events.byDates[action.date][action.startTime];
      });
    default:
      return state;
  }
}
