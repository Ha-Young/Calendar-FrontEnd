export function setEventForm(state, payload) {
  return {
    ...state,
    eventForm: {
      ...state.eventForm,
      ...payload,
    }
  };
}

export function setUserEvent(state, userEvent) {
  const copyState = { ...state };
  const allId = [ ...copyState.userEvent.allId ];

  for (const key in userEvent) {
    const { id, content } = userEvent[key];
    const copyEvent = copyState.userEvent.byId[id];

    if (!copyEvent) {
      Object.assign(copyState.userEvent.byId, { [id]: userEvent[key] });
      allId.push(id);
      Object.assign(copyState.userEvent.allId, allId);
    } else {
      Object.assign(copyState.userEvent.byId[id], {...copyEvent, content});
    }
  }

  return copyState;
}

export function setUserEventAll(state, AllEvent) {
  const events = [];

  for (const key in AllEvent) events.push(AllEvent[key]);

  return events.reduce((updatedState, userEvent) => {
    return setUserEvent(updatedState, userEvent);
  }, state);
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

  return {
    ...state,
    currentDate: new Date(year, month - 1, date),
  };
}
