export function setCalendar(state, key, payload) {
  return {
    ...state,
    calendar: {
      ...state.calendar,
      [key]: payload,
    }
  };
}
