import * as types from "../constants/actionTypes";

const initialState = {
  byId: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_EVENT_INFORMATION: {
      const { event, event: { eventDate, eventId } } = action;
      const { byId } = state;

      if (byId.hasOwnProperty(eventDate)) {
        return {
          ...state,
          byId: {
            ...byId,
            [eventDate]: [...byId[eventDate], event],
          },
          [eventId]: action.event
        };
      }

      return {
        ...state,
        byId: {
          ...byId,
          [eventDate]: [event]
        },
        [eventId]: action.event
      };
    }

    case types.REMOVE_EVENT_INFORMATION: {
      const { eventDate, eventId } = action.dateInformation;
      const mockState = {...state};
      const filterDateList = mockState.byId[eventDate].filter((event) =>
      event.eventId !== eventId
      );

      delete mockState[eventId];

      if (filterDateList.length) {
        return {
          ...mockState,
          byId: {
            ...state.byId,
            [eventDate]: [...filterDateList]
          }
        };
      }

      delete mockState.byId[eventDate];

      return {
        ...mockState,
        byId: {
          ...state.byId
        }
      };
    }

    case types.SET_EVENT_INFORMATION: {
      const { data } = action;

      if (!data) return initialState;

      const mockById = {};
      const mockState = {};

      for (const date in data) {
        const event = Object.entries(data[date]);

        for (let i = 0; i < event.length; i++) {
          if (mockById.hasOwnProperty(date)) {
            mockById[date] = [...mockById[date], event[i][1]];
            mockState[event[i][0]] = event[i][1];
          } else {
            mockById[date] = [event[i][1]];
            mockState[event[i][0]] = event[i][1];
          }
        }
      }

      return {
        byId: {
          ...mockById
        },
        ...mockState
      };
    }

    default:
      return state;
  }
}
