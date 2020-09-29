import {
  SET_TITLE,
  SET_DESCRIPTION,
  SET_DATE,
  SET_START_TIME,
  SET_END_TIME,
} from '../constants';

const initState = {
  title: '',
  description: '',
  date: '',
  startTime: 0,
  endTime: 0,
}

export function eventState(state = initState, action) {
  switch (action.type) {
    case SET_TITLE: {
      return {
        ...state,
        title: action.value,
      };
    }

    case SET_DESCRIPTION: {
      return {
        ...state,
        description: action.value,
      };
    }

    case SET_DATE: {
      return {
        ...state,
        date: action.value,
      };
    }

    case SET_START_TIME: {
      return {
        ...state,
        startTime: action.value,
      };
    }

    case SET_END_TIME: {
      return {
        ...state,
        endTime: action.value,
      };
    }

    default: {
      return state;
    }
  }
}

export default {
  eventState,
}
