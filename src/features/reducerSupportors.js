import { EVENT_INIT_ID } from "../constants";

export function setEventForm(state, key, value) {
  if (key) {
    return {
      ...state,
      eventForm: {
        ...state.eventForm,
        [key]: value,
      }
    };
  }

  return {
    ...state,
    eventForm: {
      ...state.eventForm,
      ...value,
    }
  };
}

export function setUserEvent(state, userEvent) {
  const { id } =  userEvent;
  let allId = [ ...state.userEvent.allId ];

  if (!state.userEvent.byId[id]) allId.push(id);

  return {
    ...state,
    userEvent: {
      byId: {
        ...state.userEvent.byId,
        [id]: {
          ...userEvent
        }
      },
      allId,
    },
    eventForm: {
      ...state.eventForm,
      title: "",
      content: "",
      eventId: EVENT_INIT_ID,
    },
  };
}

export function deleteUserEvent(state, eventId) {
  const copyUserEventById = { ...state.userEvent.byId };
  const copyUserEventAllId = [ ...state.userEvent.allId ];
  delete copyUserEventById[eventId];
  copyUserEventAllId.splice(copyUserEventAllId.indexOf(eventId), 1);

  return {
    ...state,
    userEvent: {
      byId: copyUserEventById,
      allId: copyUserEventAllId,
    },
  };
}

export function setCurrentDate(state) {
  const {
    year,
    month,
    date,
  } = state.eventForm;
  const current = new Date(year, month - 1, date);

  return {
    ...state,
    currentDate: current,
  };
}
