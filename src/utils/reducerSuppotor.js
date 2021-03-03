export function setCalendar(state, key, value) {
  return {
    ...state,
    calendar: {
      ...state.calendar,
      [key]: value,
    }
  };
}
