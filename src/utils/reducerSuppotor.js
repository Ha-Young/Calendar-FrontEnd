export function setEventForm(state, key, value) {
  return {
    ...state,
    eventForm: {
      ...state.eventForm,
      [key]: value,
    }
  };
}

export function setUserEvent(state, userEvent) {
  const { id } =  userEvent;
  let allId = [...state.userEvent.allId];

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
    }
  };
}
