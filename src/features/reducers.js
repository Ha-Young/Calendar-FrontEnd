import { eventForm, userEvent } from "../constants/actionTypes";
import { setEventForm, setUserEvent } from "../utils/reducerSuppotor";
import { EVENT_FORM_STATE_KEY, EVENT_INIT_ID, MAX_MIN_DATE } from "../constants";
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
    toHour: current.getHours(),
  },
  currentDate: current,
};

export default function reducer(state = initiateState, action) {
  const payload = action.payload;

  switch(action.type) {
    case eventForm.SET_TITLE:
      return setEventForm(state, EVENT_FORM_STATE_KEY.TITLE, payload);
    case eventForm.SET_CONTENT:
      return setEventForm(state, EVENT_FORM_STATE_KEY.CONTENT, payload);
    case eventForm.SET_YEAR:
      return setEventForm(state, EVENT_FORM_STATE_KEY.YEAR, payload);
    case eventForm.SET_MONTH:
      return setEventForm(state, EVENT_FORM_STATE_KEY.MONTH, payload);
    case eventForm.SET_DATE:
      return setEventForm(state, EVENT_FORM_STATE_KEY.DATE, payload);
    case eventForm.SET_FROM_HOUR:
      if (MAX_MIN_DATE.HOUR.MAX < payload) return state;
      const { toHour } = state.eventForm;

      if (payload > toHour) {
        return setEventForm(state, EVENT_FORM_STATE_KEY.FROM_HOUR, toHour);
      } else {
        return setEventForm(state, EVENT_FORM_STATE_KEY.FROM_HOUR, payload);
      }
    case eventForm.SET_TO_HOUR:
      if (MAX_MIN_DATE.HOUR.MAX < payload) return state;
      const { fromHour } = state.eventForm;

      if (fromHour > payload) {
        return setEventForm(state, EVENT_FORM_STATE_KEY.TO_HOUR, fromHour);
      } else {
        return setEventForm(state, EVENT_FORM_STATE_KEY.TO_HOUR, payload);
      }
    case userEvent.SET_EVENT:
      return setUserEvent(state, payload);
    default:
      return state;
  }
}