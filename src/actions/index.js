export const changeToDailyMode = () => {
  return {
    type: 'CHANGE_TO_DAILY_MODE'
  };
};

export const changeToWeeklyMode = () => {
  return {
    type: 'CHANGE_TO_WEEKLY_MODE'
  };
};

export const gotoNext = () => {
  return {
    type: 'GOTO_NEXT'
  };
};

export const gotoPrev = () => {
  return {
    type: 'GOTO_PREV'
  };
};

export const gotoNextMonth = () => {
  return {
    type: 'TO_NEXT_MONTH'
  };
}

export const gotoPrevMonth = () => {
  return {
    type: 'TO_PREV_MONTH'
  };
}

export const addEvent = (form) => {
  return {
    type: 'ADD_EVENT',
    payload: form
  };
};

export const selectEvent = (event) => {
  return {
    type: 'SELECT_EVENT',
    payload: event
  };
};
