export const showDaily = () => ({
  type: "SHOW_DAILY"
});

export const showWeekly = () => ({
  type: "SHOW_WEEKLY"
});

export const login = () => ({
  type: "LOGIN"
});

export const logout = () => ({
  type: "LOGOUT"
});

export const showPreviousDay = () => ({
  type: "SHOW_PREVIOUS_DAY"
});

export const showNextDay = () => ({
  type: "SHOW_NEXT_DAY"
});

export const showPreviousWeek = () => ({
  type: "SHOW_PREVIOUS_WEEK"
});

export const showNextWeek = () => ({
  type: "SHOW_NEXT_WEEK"
});

export const fetchEvents = data => ({
  type: "FETCH_EVENTS",
  data,
});
