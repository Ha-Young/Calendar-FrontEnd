import { EVENT_FORM_STATE_KEY, EVENT_INIT_ID, MAX_MIN_DATE } from "../constants";
import { eventForm, userEvent, SET_CURRENT_DATE } from "../constants/actionTypes";
import { setEventForm, setUserEvent, setCurrentDate, clearUserEvent } from "./reducerSupportors";

const current = new Date();
const initiateState = {
  userEvent: {
    byId: {},
    allId: [],
  },
  eventForm: {
    eventId: EVENT_INIT_ID,
    title: "",
    content: "",
    year: current.getFullYear(),
    month: current.getMonth() + 1,
    date: current.getDate(),
    fromHour: current.getHours(),
    toHour: current.getHours() + 1,
  },
  currentDate: current,
};

const {
  TITLE,
  CONTENT,
  YEAR,
  MONTH,
  DATE,
  FROM_HOUR,
  TO_HOUR,
} = EVENT_FORM_STATE_KEY;

const { MIN: YEAR_MIN, MAX: YEAR_MAX } = MAX_MIN_DATE.YEAR;
const { MIN: MONTH_MIN, MAX: MONTH_MAX } = MAX_MIN_DATE.MONTH;
const { MIN: DATE_MIN, MAX: DATE_MAX } = MAX_MIN_DATE.DATE;
const { MAX: HOUR_MAX } = MAX_MIN_DATE.HOUR;

export default function reducer(state = initiateState, action) {
  const payload = action.payload;

  switch(action.type) {
    case eventForm.SET_TITLE:
      return setEventForm(state, TITLE, payload);

    case eventForm.SET_CONTENT:
      return setEventForm(state, CONTENT, payload);

    case eventForm.SET_YEAR:
      const isInvalidYear = payload < YEAR_MIN || YEAR_MAX < payload;

      if (isInvalidYear) return state;

      return setCurrentDate(setEventForm(state, YEAR, payload));

    case eventForm.SET_MONTH:
      const isInvalidMonth = payload < MONTH_MIN || MONTH_MAX < payload;

      if (isInvalidMonth) return state;

      return setCurrentDate(setEventForm(state, MONTH, payload));

    case eventForm.SET_DATE:
      const isInvalidDate = payload < DATE_MIN || DATE_MAX < payload;

      if (isInvalidDate) return state;

      return setCurrentDate(setEventForm(state, DATE, payload));

    case eventForm.SET_FROM_HOUR:
      const { toHour } = state.eventForm;
      const isInvalidFromHour = HOUR_MAX < payload
        || payload === toHour;

      if (isInvalidFromHour) return state;

      return setCurrentDate(setEventForm(state, FROM_HOUR, payload));

    case eventForm.SET_TO_HOUR:
      const { fromHour } = state.eventForm;
      const isInvalidToHour = HOUR_MAX < payload
        || payload === fromHour;

      if (isInvalidToHour) return state;

      const to = fromHour > payload ? fromHour : payload;

      return setEventForm(state, TO_HOUR, to);

    case eventForm.SET_ALL_DATE:
      return setCurrentDate(setEventForm(state, null, payload));

    case eventForm.CLEAR_FORM:
      return setCurrentDate(setEventForm(state, null, payload));

    case eventForm.CORRECT_EVENT:
      return {
        ...state,
        eventForm: { ...payload },
      };

    case userEvent.SET_EVENT:
      return setUserEvent(state, payload);

    case userEvent.CLEAR_EVENT:
      return clearUserEvent(state, payload);

    case SET_CURRENT_DATE:
      const { year, month, date } = payload;
      const updatedDate = new Date(year, month, date);
      return {
        ...state,
        eventForm: {
          ...state.eventForm,
          year: year,
          month: month + 1,
          date: date
        },
        currentDate: updatedDate,
      };

    default:
      return state;
  }
}
